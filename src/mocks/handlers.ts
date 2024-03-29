import { rest } from 'msw';
import {
  planFullFilledResponse,
  plansFullFilledResponse,
  userInfoFullFilledResponse,
} from './plans-mocks';

export const handlers = [
  rest.post(
    `https://adrian-garcia-final-project-back-202301.onrender.com/auth/register`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'Your account has been successfully created' }),
        );
      }

      return res(
        ctx.status(409),
        ctx.json({ msg: 'User is already registered in app' }),
      );
    },
  ),

  rest.post(
    `https://adrian-garcia-final-project-back-202301.onrender.com/auth/login`,
    async (req, res, ctx) => {
      const request = await req.json();
      const { email } = request;

      if (email === 'email@test.com') {
        return res(
          ctx.status(201),
          ctx.json({ msg: 'Welcome to ChoriPlaneo!' }),
        );
      }

      return res(
        ctx.status(404),
        ctx.json({
          msg: 'Your password is invalid or this account does not exist.',
        }),
      );
    },
  ),

  rest.get(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans`,
    async (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(plansFullFilledResponse));
    },
  ),

  rest.get(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans/1234`,
    async (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ plans: planFullFilledResponse.plans[0] }),
      );
    },
  ),

  rest.get(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/users/info`,
    async (_req, res, ctx) => {
      return res(ctx.status(200), ctx.json(userInfoFullFilledResponse));
    },
  ),
];

export const errorHandlers = [
  rest.get(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans`,
    (_req, res, ctx) => {
      return res.once(ctx.status(500), ctx.json(null));
    },
  ),
  rest.get(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/users/info`,
    (_req, res, ctx) => {
      return res.once(ctx.status(500), ctx.json(null));
    },
  ),
  rest.get(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans/1234`,
    (_req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ msg: "Ops... this plan don't exists." }),
      );
    },
  ),
];

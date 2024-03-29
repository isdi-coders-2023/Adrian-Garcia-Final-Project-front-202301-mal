export const getAllPlans = async () => {
  const response = await fetch(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const getPlanById = async (planId: string) => {
  const response = await fetch(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans/${planId}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const getUserInfo = async () => {
  const response = await fetch(
    `https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/users/info`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
        'Content-Type': 'application/json',
      },
    },
  );

  return response;
};

export const createNewPlan = async (newPlan: FormData) => {
  const response = await fetch(
    'https://adrian-garcia-final-project-back-202301.onrender.com/api/v1/plans',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`,
      },
      body: newPlan,
    },
  );

  return response;
};

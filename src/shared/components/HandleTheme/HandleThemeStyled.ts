import styled from 'styled-components';

export const Switch = styled.div`
  position: absolute;
  right: 5%;
  top: 3%;

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 55px;
    height: 28px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 37px;
    width: 37px;
    left: 0px;
    bottom: 4px;
    top: 0;
    bottom: 0;
    margin: auto 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
    box-shadow: 0 0px 15px #2020203d;
    background: var(--main-color) url('https://i.ibb.co/FxzBYR9/night.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  input.dark + .slider {
    background-color: var(--main-color);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--main-color);
  }

  input.dark + .slider:before {
    -webkit-transform: translateX(24px);
    -ms-transform: translateX(24px);
    transform: translateX(24px);
    background: white url('https://i.ibb.co/7JfqXxB/sunny.png');
    background-repeat: no-repeat;
    background-position: center;
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;

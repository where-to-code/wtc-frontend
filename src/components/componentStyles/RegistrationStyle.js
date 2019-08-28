import styled from 'styled-components';

import map from '../../assets/map.png';

export const StyledRegistration = styled.div`
  display: flex;
`;

export const StyledMap = styled.div`
  height: 100vh;
  width: 50vw;
  background: url(${map});

  img {
    float: right;
    margin: 20px 10px;
  }
`;

export const StyledLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'Roboto', sans-serif;
  width: 40vw;
  max-width: 520px;
  border: 1px solid #56c1cb;
  border-radius: 10px;
  margin: 80px 100px;

  h2 {
    font-weight: bold;
    font-size: 36px;
    letter-spacing: 0.065em;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      width: 300px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #56c1cb;
      box-sizing: border-box;
      border-radius: 5px;
      color: black;
      padding-left: 10px;
      margin: 10px 0;
    }

    button {
      width: 250px;
      font-size: 16px;
      margin: 10px 0;
    }
  }

  p {
    margin: 15px 0;
    font-size: 12px;
  }

  img {
    width: 30px;
    height: 30px;
  }
`;

import styled from 'styled-components';

import map from '../../assets/map.png';

export const StyledRegistration = styled.div`
  display: flex;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100vw;
    height: 100vh;
  }
`;

export const StyledMap = styled.div`
  height: 100vh;
  width: 50vw;
  background: url(${map});

  img {
    float: right;
    margin: 20px 10px;
  }

  @media screen and (max-width: 900px) {
    display: none;
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
      width: 270px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #56c1cb;
      box-sizing: border-box;
      border-radius: 5px;
      color: black;
      padding-left: 10px;
      margin: 10px 0;
    }

    span {
      color: red;
      margin: 0;
      font-size: 10px;
    }

    button {
      width: 250px;
      height: 40px;
      font-size: 16px;
      margin: 10px 0;
      background: rgba(86, 193, 203, 0.8);
      border: none;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
    }

    button:hover {
      background: rgba(86, 193, 203, 1);
      transition: 0.2s;
    }
  }

  div {
    display: flex;
    align-items: center;

    p {
      margin: 15px 0;
      font-size: 12px;
    }

    span {
      display: block;
      width: 70px;
      border-bottom: 1px solid #56c1cb;
      margin: 0 10px;
    }
  }

  @media screen and (max-width: 900px) {
    width: 400px;
    height: 600px;

    h2 {
      font-size: 26px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 300px;
    margin: 30px;

    h2 {
      font-size: 21px;
      margin-top: 20px;
    }

    form {
      input {
        width: 220px;
      }

      button {
        width: 150px;
      }
    }

    img {
      margin-bottom: 20px;
    }
  }
`;
export const StyleGit = styled.div`
  border-radius: 50%;
  padding: 5px;
  border: 1px solid #56c1cb;
  svg {
    color: #56c1cb;
    font-size: 20px;
  }
`;
export const TabletAndMobileHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid black;
  margin-bottom: 50px;

  img {
    width: 100px;
    height: 50px;
  }

  @media screen and (min-width: 900px) {
    display: none;
  }

  @media screen and (max-width: 900px) {
    display: block;
  }
`;

import styled from 'styled-components';
import map from '../../assets/map.png';

export const StyledWrapper = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`;

export const StyledRegistration = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 99vw;
  height: 100vh;
  @media screen and (min-width: 800px) {
    display: flex;
    width: 60vw;
    justify-content: center;
  }
`;

export const StyledLeftSection = styled.div`
  display: flex;
  width: 300px;
  height: 600px;
  margin: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
  border: 1px solid #56c1cb;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    font-weight: bolder;
    font-family: 'Roboto', sans-serif;
    color: #666a7c;
    padding: 10px 0;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    input {
      width: 250px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #56c1cb;
      box-sizing: border-box;
      border-radius: 5px;
      color: #666a7c;
      padding-left: 10px;
      margin: 10px 0;
    }

    span {
      color: red;
      margin: 0;
      font-size: 10px;
    }

    button {
      width: 150px;
      height: 40px;
      font-size: 16px;
      margin: 10px 0;
      background: rgba(86, 193, 203, 0.8);
      border: none;
      color: #fff;
      font-weight: bold;
      border-radius: 5px;
      svg {
        margin: 0 auto;
      }
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

  span {
    margin-top: 15px;
    a {
      color: #56c1cb;
    }
  }

  @media screen and (min-width: 700px) {
    width: 500px;
  }

  @media screen and (min-width: 800px) {
    width: 30vw;
    height: 600px;

    h2 {
      font-size: 36px;
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

export const StyleMap = styled.div`
  height: 150px;
  background-image: url(${map});
  background-size: cover;
  background-position: center;

  div {
    width: 180px;
    margin: 0 auto;

    img {
      width: 100%;
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: flex-end;
    width: auto;
    height: 100vh;
    width: 40vw;
    div {
      width: 180px;
      margin: 0;

      img {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
`;

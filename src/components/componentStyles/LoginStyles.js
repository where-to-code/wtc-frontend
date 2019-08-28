import styled from 'styled-components';

export const LoginContainer = styled.div`
  .img {
    height: 150px;
    background-image: url('https://image.freepik.com/free-vector/street-map-with-pin-routes_23-2147622544.jpg');
    background-size: cover;
    background-position: center;
  }
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    .img {
      .logo-login {
        padding: 20px;
        height: 100px;
      }
      display: flex;
      justify-content: flex-end;
      width: 50vw;
      height: 100vh;
    }
  }
`;

export const LoginField = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: flex-start;
  height: 600px;
  h1 {
    font-size: 24px;
    font-weight: bolder;
    font-family: 'Roboto', sans-serif;
    color: #666a7c;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 200px;

    input {
      width: 250px;
      border: none;
      height: 40px;
      border: 1px solid #56c1cb;
      border-radius: 5px;
      color: #666a7c;
      padding: 0 20px;
      font-size: 16px;
    }
    input[type='submit'] {
      width: 150px;
      background-color: #56c1cb;
      color: #fff;
      font-weight: bold;
    }
  }

  span {
    a {
      color: #56c1cb;
    }
  }

  @media (min-width: 600px) {
    margin: auto;
    justify-content: center;
    border: 1px solid #56c1cb;
    border-radius: 10px;
    padding: 100px;
    h1 {
      font-size: 36px;
      padding: 20px 0;
    }
    form {
      input {
        width: 300px;
      }
    }
  }
`;

export const AltLogin = styled.div`
  display: flex;
  flex-direction: column;
  .top {
    display: flex;
    justify-content: space-around;
    margin-top: 40px;

    div {
      display: flex;
      align-items: center;
      ustify-content: space-between;
      span {
        display: block;
        width: 70px;
        border-bottom: 1px solid #56c1cb;
      }
    }
  }
  .bottom {
    margin: 20px auto;
    div {
      ${'' /* width: 30px;
      height: 30px; */}
      border-radius: 50%;
      padding: 5px;
      border: 1px solid #56c1cb;
      svg {
        color: #56c1cb;
        font-size: 20px;
      }
    }
  }
`;

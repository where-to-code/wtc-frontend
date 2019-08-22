import styled from 'styled-components';
import icon from '../assets/searchicon.png';

export const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3025&q=80');
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(102, 106, 124, 0.5);
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 5%;
    .logo {
      width: 70px;
      margin: 0 0 0 15px;
      img {
        width: 100%;
      }
    }
    .auth {
      display: flex;
      button {
        height: 25px;
        width: 70px;
        font-size: 12px;
        font-weight: bold;
        margin: 0 10px;
        background: none;
        border: 0.5px solid #fff;
        border-radius: 5px;
        color: #fff;
      }
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 500px;
    width: 300px;
    h2 {
      font-weight: bolder;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: #e5e5e5;
      text-shadow: 0px 4px 10px #666a7c;
      font-family: 'Roboto', sans-serif;
    }
    form {
      display: flex;
      position: relative;

      input[type='text'] {
        background: rgba(219, 219, 219, 0.5);
        width: 250px;
        height: 35px;
        margin: 60px 0;
        border: none;
        border-radius: 10px 0 0 10px;
        color: #fff;
        text-align: left;
        padding: 0 10px;
        ::-webkit-input-placeholder {
          color: #fff;
          font-size: 12px;
          padding: 8px;
        }
      }
      input[type='submit'] {
        margin: 60px 0;
        background: url(${icon}) no-repeat scroll center rgba(255, 150, 1, 0.8);
        border-radius: 0 10px 10px 0;
        border: none;
        height: 35px;
        width: 50px;
      }
    }
    button {
      width: 170px;
      background-color: #56c1cb;
      font-size: 12px;
      font-weight: 600;
      color: #fff;
      border: none;
      border-radius: 10px;
      padding: 14px;
    }
  }
  @media (min-width: 600px) {
    header {
      height: 60px;
      .logo {
        width: 150px;
      }
      .auth {
        button {
          height: 40px;
          width: 107px;
          font-size: 16px;
        }
      }
    }
    .container {
      width: 800px;
      h2 {
        font-size: 36px;
        line-height: 50px;
      }
      form {
        input[type='text'] {
          width: 550px;
          height: 50px;
          ::-webkit-input-placeholder {
            font-size: 16px;
          }
        }
        input[type='submit'] {
          height: 50px;
          width: 50px;
        }
      }
      button {
        width: 240px;
        font-size: 16px;
        padding: 16px;
      }
    }
  }
`;

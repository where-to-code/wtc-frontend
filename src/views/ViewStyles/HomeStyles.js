import styled from 'styled-components';
import home from '../../assets/home.jpeg';

export const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${home});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(102, 106, 124, 0.5);
  display: flex;
  flex-direction: column;
  align-content: space-between;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 500px;
    width: 300px;
    margin: auto 0;
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
        border-radius: 10px;
        color: #fff;
        text-align: left;
        padding: 0 10px;
        font-size: 16px;
        ::-webkit-input-placeholder {
          color: #fff;
          font-size: 12px;
          padding: 8px;
        }
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
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (min-width: 600px) {
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

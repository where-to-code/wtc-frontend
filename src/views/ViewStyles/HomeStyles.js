import styled from 'styled-components';
import home from '../../assets/home.jpeg';

export const StyledHome = styled.div`
  height: 100vh;
  background-image: url(${home});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(102, 106, 124, 0.4);
  display: flex;
  flex-direction: column;
  border:1px solid red;
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
    .row{
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .row-half{
      display:flex;
      justify-content: center;
      width: 48%;
      background: white;
      border-radius: 5px;
      color: #666666;
      padding : 60px 0;
      box-shadow: 0 14px 28px rgba(0,0,0,0.70), 
    0 10px 10px rgba(0,0,0,0.60);
    }
    h2 {
      font-weight: bolder;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: white;
      text-shadow: 0px 4px 10px #666a7c;
      font-family: 'Roboto', sans-serif;
      margin-bottom:30px;
    }

    form {
      display: flex;
      width: 100%;
      justify-content: center;

      input[type='text'] {
        height: 35px;
        width: 95%;
        border: 1px solid #eee;
        border-radius: 10px;
        color: #666;
        padding-left:15px
        text-align: left;
        font-size: 16px;
        ::-webkit-input-placeholder {
          color: #999;
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
          width: 95%;
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

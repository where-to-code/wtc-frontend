import styled from 'styled-components';

export const StyledHome = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url('https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3025&q=80');
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(102, 106, 124, 0.5);
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 500px;
    width: 300px;
    h2 {
      @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
      font-family: 'Open Sans', sans-serif;
      font-weight: bolder;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: #e5e5e5;
      text-shadow: 0px 4px 10px #666a7c;
    }
    input[type='text'] {
      background: rgba(219, 219, 219, 0.5);
      width: 250px;
      height: 35px;
      margin: 60px 0;
      border: none;
      border-radius: 10px;
      ::-webkit-input-placeholder {
        color: #fff;
        font-size: 12px;
        padding: 8px;
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
    @media (min-width: 600px) {
      width: 800px;
      h2 {
        font-size: 36px;
        line-height: 50px;
      }
      input[type='text'] {
        width: 800px;
        height: 50px;
        ::-webkit-input-placeholder {
          font-size: 16px;
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

import styled from 'styled-components';
import home from '../../assets/caffe.jpg';
import localisation from '../../assets/icons8-marker-red.png';

export const StyledHome = styled.div`
  height: 100vh;
  background-image: url(${home});
  background-size: cover;
  background-position: center;
  box-shadow: inset 0 0 0 2000px rgba(102, 106, 124, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
  
    .row{
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
    }
    .row-half{
      display:flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      background: none;
      color: #666666;
      height: 100%;
    }

    .row-half.right{
      background: white;
    }

    h2, h3 {
      font-weight: bolder;
      font-size: 32px;
      line-height: 33px;
      text-align: center;
      color: #666A7C;
      font-family: 'Roboto', sans-serif;
      margin:0 auto;
      margin-bottom:20px;
      width: 70%;
    }
    h2{
      font-size: 24px;
    }

    p {
      width: 50%;
      margin:0 auto;
      padding-bottom: 20px;
      text-align: center;
    }
    .white{
      color:white;
    }
    form {
      display: flex;
      width: 100%;
      justify-content: center;

      input[type='text'] {
        background: url(${localisation}) no-repeat 3px;
        background-size: 20px;
        height: 35px;
        width: 60%;
        border: 3px solid white;
        border-radius:5px;
        color: white;
        padding-left:30px
        text-align: left;
        font-size: 16px;
        ::-webkit-input-placeholder {
          color: white;
          font-size: 12px;
          fonct-weight:regular;
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
      margin:0 auto;
      border-radius: 10px;
      padding: 14px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  @media (min-width: 600px) {
    .container {
      .row{
        flex-direction: row;
      }
      .row-half{
        flex-direction: column;
        border-left: none;
      }
      h2 {
        font-size: 42px;
        line-height: 50px;
      }
      form {
        input[type='text'] {
          width: 60%;
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

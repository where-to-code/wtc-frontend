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
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
    }
    .row-half{
      display:flex;
      flex-direction: column;
      justify-content: center;
      margin-top:10px;
      width: 100%;
      background: white;
      border-radius: 10px;
      color: #666666;
      padding : 20px 0;
      border-left: 10px solid #DBDBDB;
      box-shadow: 0 14px 28px rgba(0,0,0,0.30), 
      0 10px 10px rgba(0,0,0,0.60);
    }
    .row-half:hover{
      margin-top:0px;
    }

    h2, h3 {
      font-weight: bolder;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: white;
      text-shadow: 0px 4px 10px #666a7c;
      font-family: 'Roboto', sans-serif;
      margin-bottom:20px;
    }
    
    h3 {
      color: #666A7C;
      text-shadow: none;
      margin-bottom:30px;
    }
   
    form {
      display: flex;
      width: 100%;
      justify-content: center;

      input[type='text'] {
        background: url(${localisation}) no-repeat 3px;
        opacity: .7;
        background-size: 20px;
        height: 35px;
        width: 90%;
        border: 1px solid #56c1cb;
        border-radius: 10px;
        color: #666;
        padding-left:30px
        text-align: left;
        font-size: 16px;
        ::-webkit-input-placeholder {
          color: #999;
          font-size: 12px;
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
      width: 800px;
      .row{
        flex-direction: row;
      }
      .row-half{
        flex-direction: column;
        width: 48%;
        padding : 40px 0;
        border-top: 10px solid #DBDBDB;
        border-left: none;
      }
      h2 {
        font-size: 36px;
        line-height: 50px;
      }
      form {
        input[type='text'] {
          width: 90%;
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

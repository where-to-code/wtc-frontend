import styled from 'styled-components';

export const StyledModal = styled.div`
  display: ${props => (props.isShown ? 'block' : 'none')};
  z-index: 1;
  border-radius: 5px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  margin: 20px 0;
  padding: 15px;
  background-color: #fff;
  height: ${props => (props.id ? '460px' : 'unset')};
  
  h2 {
    font-size: 24px;
    margin: 10px 0;
    color: #03525b;
  }

  div {
    text-align: center;
    h2 {
      font-size: 16px;
      margin: 10px 0;
      color: #03525b;
    }
  }

  button {
    width: 100px;
    height: 35px;
    padding: 10px;
    color: #fff;
    background-color: #56c1cb;
  }

  form {
      h2 {
          margin: 5px 0;
          font-size: 18px;
      }
      display: flex;
      flex-direction: column;
      text-align: center;
      button {
          text-align: center;
          margin: 0 auto;
      }
      textarea {
        width: 90%;
        height: 130px;
        border-radius: 5px;
        outline: none;
        resize: none;
        margin: 10px 0;
        border: 1px solid #e5e5e5;
    }
  }

  span {
    float: right
    margin: 0;
    width: auto;
    color: #03525b;
    cursor: pointer;
    font-size: 18px;
    font-weight: bold;  
  }

  @media (min-width: 700px) {
    

    
  }
`;

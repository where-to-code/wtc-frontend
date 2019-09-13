import styled from 'styled-components';

export default styled.div`
  position: fixed; /* Sit on top of the page content */
  
  display: ${props => props.editing ? 'flex' : 'none'}; /* Hidden by default */

  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%; /* Full width (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: default;

  form {
    display: flex;
    flex-direction: column;

    padding: 20px;
    border: 1px solid #e5e5e5;
    text-align: center;
    background: white;
    width: 50%;
    min-width: 300px;
    max-width: 500px;
    border-radius: 10px;
    color: #666a7c;

    textarea {
      resize: none;
      font-size: 12px;
      outline: none;
      padding: 5px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      button {
        width: 60px;
        height: 25px;
        background-color: #56c1cb;
        font-size: 10px;
        font-weight: 600;
        color: #fff;
        border: none;
        border-radius: 2px;
        padding: 3px;
        margin: 10px 0 0 5px;
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;

    padding: 20px;
    border: 1px solid #e5e5e5;
    text-align: center;
    background: white;
    width: 50%;
    min-width: 100px;
    max-width: 200px;
    border-radius: 10px;
    color: #666a7c;

    button {
      margin-top: 5px;
    }
  }
`;

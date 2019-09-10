import styled from 'styled-components';

export const StyledOverlayPopup = styled.div`
  position: fixed; /* Sit on top of the page content */
  display: none; /* Hidden by default */
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
  .message-container {
    padding: 20px;
    border: 1px solid #e5e5e5;
    text-align: center;
    background: white;
    width: 50%;
    min-width: 300px;
    max-width: 400px;
    border-radius: 10px;
    color: #666a7c;
  }
  h3 {
    font-size: 1.5rem;
    padding-bottom: 20px;
    color: #03525b;
  }
  .actions-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .resend {
    cursor: pointer;
    font-size: 1rem;
    padding: 15px;
    border: 1px solid #56c1cb;
    border-radius: 5px;
    color: #03525b;
    margin-top: 15px;
  }

  .closing-cross {
    display: flex;
    justify-content: flex-end;
    font-weight: bold;
    font-size: 1.3rem;
  }

  .closing-cross span {
    cursor: pointer;
    color: #03525b;
  }

  .closing-cross span:hover {
    color: #56c1cb;
  }
`;

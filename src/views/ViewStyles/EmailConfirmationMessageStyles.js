import styled from 'styled-components';

export const StyledConfirmationPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const StyledMessage = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: 10rem;
    height: 10rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  button {
    width: 150px;
    height: 40px;
    font-size: 16px;
    margin: 30px 0;
    background: rgba(86, 193, 203, 0.8);
    border: none;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;
  }

  button:hover {
    background: rgba(86, 193, 203, 1);
    transition: 0.2s;
  }
`;

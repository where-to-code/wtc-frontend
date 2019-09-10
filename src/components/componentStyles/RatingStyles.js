import styled from 'styled-components';

export const StyledAverage = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h3 {
    font-family: 'Lexend Giga', sans-serif;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  p {
    font-size: 80px;
    font-weight: bold;
    color: #03525b;
    font-family: 'Lexend Giga', sans-serif;
    margin: 20px 0;
  }
  button {
    width: 130px;
    height: 50px;
    background-color: #56c1cb;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 0 5px;
  }
  @media (min-width: 600px) {
    margin: 20px;
    h3 {
      font-size: 36px;
    }
    p {
      font-size: 100px;
    }
    button {
      width: 130px;
      font-size: 12px;
    }
  }
`;

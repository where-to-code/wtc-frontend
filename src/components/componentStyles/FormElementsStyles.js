import styled from 'styled-components';

export const StyledButton = styled.button`
  width: 100px;
  height: 35px;
  padding: 10px;
  background-color: #56c1cb;
  margin: 10px 0;
  font-size: 1rem;
  font-weight: 300;
  border-radius: 5px;
  color: #fff;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background: #ffffff;
  border: 1px solid #56c1cb;
  box-sizing: border-box;
  border-radius: 5px;
  color: #666a7c;
  padding-left: 10px;
  margin: 10px 0;
`;

export const StyledTextarea = styled.textarea`
  width: 100%;
  background: #ffffff;
  border: 1px solid #56c1cb;
  height: 130px;
  border-radius: 5px;
  outline: none;
  resize: none;
  margin: 10px 0;
  outline: none;
  padding: 10px;
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 100px;
    height: 40px;
    padding: 10px;
    color: #fff;
    background-color: #56c1cb;
    border-radius: 5px;
  }
`;

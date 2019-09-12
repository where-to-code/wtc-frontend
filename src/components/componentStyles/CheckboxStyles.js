import styled from 'styled-components';

export const StyledCheckbox = styled.label`
  display: block;
  position: relative;
  padding-left: 25px;
  margin: 12px;
  cursor: pointer;
  font-size: 16px;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  span {
    position: absolute;
    top: -3px;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: #eee;
    border-radius: 2px;
  }

  &:hover input ~ span {
    background-color: #ccc;
  }

  input:checked ~ span {
    background-color: #56c1cb;
  }

  span:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ span:after {
    display: block;
  }

  span:after {
    left: 7px;
    top: 3px;
    width: 4px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`;

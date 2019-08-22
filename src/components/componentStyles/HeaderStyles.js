import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  .logo {
    width: 50px;
    margin: 0 0 0 15px;
    img {
      width: 100%;
    }
  }
  .auth {
    display: flex;
    button {
      height: 25px;
      width: 70px;
      font-size: 12px;
      font-weight: bold;
      margin: 0 10px;
      background: none;
      border: 0.5px solid #fff;
      border-radius: 5px;
      color: #fff;
    }
  }
  @media (min-width: 600px) {
    height: 40px;
    .logo {
      width: 120px;
    }
    .auth {
      button {
        height: 40px;
        width: 107px;
        font-size: 16px;
      }
    }
  }
`;

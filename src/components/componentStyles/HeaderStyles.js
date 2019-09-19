import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 2;
  background-color: ${props => (props.landing ? '' : 'rgb(219,219,219, 0.5)')};
  .logo {
    width: 80px;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 100%;
    }
  }
  .auth {
    display: flex;
    align-items: center;
    button {
      height: 30px;
      width: 70px;
      font-size: 12px;
      font-weight: 300;
      margin: 0 10px;
      background: none;
      border: ${props =>
        props.landing ? '0.5px solid #fff' : '0.5px solid #03525B'};
      border-radius: 5px;
      color: ${props => (props.landing ? '#fff' : '#666A7C')};
    }
    .add-space {
      background: #56c1cb
      width: 120px;
      &:hover {
        background:none;
      }
    }
  }
  .top-notif {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 22px;
    width: 22px;
    background: #eb5757;
    border: 1px solid #eb5757;
    border-radius: 50%;
    margin-right: 10px;
    div {
      font-size: 0.8rem;
      font-weight: bold;
      color: white;
      text-align: center;
    }
  }
  .top-notif.green{
    background: #56C1CB;
    border:1px solid #ffffff;
  }

  @media (min-width: 600px) {
    height: 65px;
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

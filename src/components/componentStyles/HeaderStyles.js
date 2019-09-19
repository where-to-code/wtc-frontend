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
      font-weight: 500;
      margin: 0 10px;
      background: none;
      border: ${props =>
        props.landing ? '2px solid #fff' : '1px solid #03525B'};
      border-radius: 5px;
      color: ${props => (props.landing ? '#fff' : '#666A7C')};
      transition: all 0.3s ease 0s;
      &:hover {
        transition: all 0.3s ease 0s;
        box-shadow: ${props =>
          props.landing
            ? '1px 1px 5px 1px rgba(3, 82, 91, 0.84)'
            : '1px 1px 5px 1px rgba(102,106,124,1)'};
        transform: translateY(-7px);
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
  .top-notif.green {
    background: #56c1cb;
    border: 1px solid #ffffff;
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

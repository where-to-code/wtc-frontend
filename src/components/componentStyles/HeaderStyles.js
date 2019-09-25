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
  padding-right:20px;
  background-color: ${props => (props.landing ? '' : '#fff')};
  border-bottom: ${props => (props.landing ? 'none' : '1px solid #eee')};
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
      font-size: 12px;
      font-weight: 400;
      margin: 0 0px;
      padding-left: 20px;
      padding-right: 20px;
      margin:10px;
      background: none;
      border: ${props =>
        props.landing ? '2px solid #fff' : 'none'};
      border-radius: 5px;
      color: ${props => (props.landing ? '#fff' : '#111111')};
      transition: all 0.3s ease 0s;
      &:hover {
        transition: all 0.3s ease 0s;
        color: ${props => (props.landing ? '#fff' : '#56c1cb')};
        transform: translateY(-7px);
      }
    }
    .add-space {
      background: #56c1cb;
      color: #fff;
      border-radius:5px;
      &:hover {
        color: #fff;
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
        font-size: 16px;
      }
    }
  }
`;

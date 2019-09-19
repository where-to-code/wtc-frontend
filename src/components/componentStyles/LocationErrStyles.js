import styled from 'styled-components';
import icon from '../../assets/searchicon.png';

export const StyledLocationErr = styled.div`
  width: 55vw;
  margin: 0 auto;
  text-align: center;
  padding-right: 30px;
  h4 {
    font-size: 2rem;
    padding-top: 30px;
  }
  h6{
    padding-top: 10px;
    font-weight: unset;
    line-height: 1.5;
  }
  p {
    font-size: 1.4rem;
    padding: 30px 0;
  }
  button {
    width: 170px;
    background-color: #56c1cb;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 14px;
    &:hover {
      cursor: pointer;
    }
  }
  form {
    display: flex;
    position: relative;
    @media (min-width: 1200px) {
      margin-left: 180px;
      margin-right: 180px;
    }
    input[type='text'] {
      background: rgba(219, 219, 219, 0.5);
      width: 85%;
      height: 35px;
      margin: 0 auto;
      border: none;
      border-radius: 10px 0 0 10px;
      color: black;
      text-align: left;
      padding: 0 10px;
      @media (min-width: 600px) {
        width: 100%;
      }
      ::-webkit-input-placeholder {
        color: #fff;
        font-size: 12px;
        padding: 8px;
      }
    }
    input[type='submit'] {
      margin: 0 auto;
      background: url(${icon}) no-repeat scroll center rgba(255, 150, 1, 0.8);
      border-radius: 0 10px 10px 0;
      border: none;
      height: 35px;
      width: 50px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const StyledNoGeoLocation = styled.div`
  display: ${props => (props.toggleNoLoc ? 'block' : 'none')};
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 2;
    bottom: 0;
    background-color: #e5e5e5;
    color: #ff0000;
    font-size: 16px;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px 0;
  }

  p {
    margin: 10px auto;
  }

  button {
    display: block;
    width: 35px;
    height: 45px;
    bottom: -3px;
    right: 25px;
    background-color: transparent;
    font-size: 28px;
    color: #ff0000;
  }
`;

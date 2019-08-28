import styled from 'styled-components';
import icon from '../../assets/searchicon.png';

export const StyledMap = styled.div`
  display: none;
  @media (min-width: 600px) {
    position: fixed;
    display: block;
    top: 32px;
    right: 0px;
    height: 100%;
    width: 35vw;
  }
`;

export const StyledLoader = styled.div`
  position: fixed;
  left: 30%;
  top: 50%;
`;

export const StyledSearch = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top: 1px solid #03525b;
  @media (min-width: 600px) {
    flex-direction: row;
    .filter {
    }
  }
`;

export const FilterPaneStyle = styled.div`
  display: flex;
  width: 100%;
  box-shadow: ${props =>
    props.show ? '0px 3px 2px 1px rgba(86, 193, 203, 0.5)' : 'none'};
  .filter {
    color: #56c1cb;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 20px;
    &:hover {
      cursor: pointer;
    }
  }
  .pane {
    display: ${props => (props.show ? 'flex' : 'none')};
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    padding: 20px;
    .check {
      .content {
        display: flex;
      }
      div {
        padding: 0 10px;
        font-size: 12px;
      }
    }
  }
  @media (min-width: 600px) {
    .pane {
      .check {
        div {
          font-size: 16px;
        }
      }
    }
  }
`;

export const CardContainer = styled.div`
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    flex-direction: row;
    margin: 20px 40px;
    width: 60vw;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const StyledCard = styled.div`
  border: ${props => props.active ? '2px solid red' : 'inherit'} ;
  margin: 10px 0;
  width: 100%;
  height: 340px;
  box-shadow: -1px 1px 5px 1px rgba(219, 219, 219, 1);
  background-color: rgba(219, 219, 219, 0.35);
  border-radius: 5px;

  .desc {
    text-align: center;
    padding: 10px;
    h4 {
      font-size: 18px;
      font-weight: bolder;
      color: #666a7c;
    }
    div {
      margin: 10px auto;
      font-size: 16px;
      line-height: 18px;
      color: #666a7c;
    }
  }
  img {
    width: 100%;
    height: 230px;
    border-radius: 5px 5px 0 0;
  }
  @media (min-width: 600px) {
    width: 300px;
  }
`;

export const StyledLocationErr = styled.div`
  width: 55vw;
  margin: 0 auto;
  text-align: center;
  padding-right: 30px;
  h4 {
    font-size: 2rem;
    padding-top: 30px;
  }
  p{
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
          width: 100%
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
`

export const StyledNoGeoLocation = styled.div`
  display: ${props => props.toggleNoLoc ? 'block' : 'none'};
  border: ${props => console.log(props.toggleNoLoc)};
  div {
    position: fixed;
    z-index: 2;
    bottom: 0;
    background-color: #000000b8;
    color:#860d0d;
    left: 0;
    right: 0;
    text-align: center;
    padding: 10px 0;
  }
  button {
    display: block;
    width: 35px;
    height: 45px;
    border: 1px solid black;
    position: fixed;
    bottom: -3px;
    right: 25px;
    background-color: #000000b8;
    font-size: 1rem;
  }
`
import styled from 'styled-components';

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

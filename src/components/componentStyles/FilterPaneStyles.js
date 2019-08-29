import styled from 'styled-components';

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
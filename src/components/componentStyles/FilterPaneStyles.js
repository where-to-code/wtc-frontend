import styled from 'styled-components';

export const FilterPaneStyle = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 2px 1px rgba(86, 193, 203, 0.5);
  .filter {
    color: #56c1cb;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 10px;
    &:hover {
      cursor: pointer;
    }
  }
  .pane {
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
  }
  @media (min-width: 600px) {
    .pane {
      .check {
        div {
          font-size: 14px;
        }
      }
    }
  }
`;

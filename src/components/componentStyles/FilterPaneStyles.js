import styled from 'styled-components';

export const FilterPaneStyle = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
  box-shadow: 0 14px 28px rgba(0,0,0,0.02);
  padding-top:20px;
  padding-bottom:10px;
  .filter {
    color: #56c1cb;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 15px;
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

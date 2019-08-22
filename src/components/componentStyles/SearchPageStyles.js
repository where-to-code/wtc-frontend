import styled from 'styled-components';

export const StyledMap = styled.div`
  height: 100vh;
  width: 45vw;
`;

export const StyledSearch = styled.div`
  display: flex;
  border-top: 1px solid #03525b;
`;

export const FilterPaneStyle = styled.div`
  width: 12%;
  border-right: 1px solid #03525b;
  .filterTitle {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding: 5%;
    border-bottom: 1px solid #56c1cb;
    h4 {
      font-size: 18px;
      font-weight: bold;
      color: #666a7c;
      text-align: center;
    }
  }
  .check {
    height: 60px;
    border-bottom: 1px solid #56c1cb;
    .content {
      display: flex;
      align-items: center;
      padding: 8%;
    }

    div {
      padding: 0 10px;
    }
  }
`;

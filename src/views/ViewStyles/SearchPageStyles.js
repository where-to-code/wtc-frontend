import styled from 'styled-components';

export const StyledLoader = styled.div`
  position: fixed;
  left: 40%;
  top: 50%;
  @media (min-width: 600px) {
    left: 50%;
    top: 50%;
  }
`;

export const StyledSearch = styled.div`
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
    margin-top: 60px;
    .filter {
    }
  }
`;

export const CardContainer = styled.div`
  margin: 20px 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const LeftPane = styled.div`
  width: 100%;
  @media (min-width: 600px) {
    width: 65vw;
  }
`;

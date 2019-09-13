import styled from 'styled-components';

export const LocationContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media (min-width: 600px) {
    width: 90%;
    margin: 0 auto;
    margin-top: 75px;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 950px) {
    flex-direction: row;
  }
`;

export const TopRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width:100%;
  @media (min-width: 950px) {
    width: 45vw;
  }
`;

export const StyledLocation = styled.div`
  width: 100vw;
`;

import styled from 'styled-components';

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
  #map {
    width: 35vw;
  }
`;

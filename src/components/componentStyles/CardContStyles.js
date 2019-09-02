import styled from 'styled-components';

export const StyledCardContainer = styled.div`
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

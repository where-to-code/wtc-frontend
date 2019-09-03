import styled from 'styled-components';

export const StyledComment = styled.div`
  margin: 10px;
  h3 {
    margin: 5px;
    font-size: 18px;
    font-weight: bold;
    color: #03525b;
    padding-bottom: 10px;
    text-align: center;
  }
  p {
    line-height: 1.2;
    text-align: justify;
    padding: 5px;
  }
  @media (min-width: 600px) {
    width: 60%;
    margin: 5px;
    h3 {
      text-align: left;
    }
  }
`;

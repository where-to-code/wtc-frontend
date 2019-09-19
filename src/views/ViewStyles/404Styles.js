import styled from 'styled-components';

export const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

export const NotFoundMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
  }

  h2 {
    font-size: 3rem;
    margin-top: 2rem;
  }

  @media screen and (max-width: 400px) {
    img {
      max-width: 150px;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }
`;

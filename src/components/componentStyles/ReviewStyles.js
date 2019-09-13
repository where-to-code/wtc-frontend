import styled from 'styled-components';

export const StyledReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  h3 {
    font-size: 24px;
    font-weight: bold;
    margin: 5px 0;
  }
`;

export const StyledReviewRatings = styled.div`
  padding-left: 10px;
  background: #fff;
  width: 40%;
`;

export const StyledReviewCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  justify-content: space-between;
  margin: 10px 0;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px 0;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const StyledReview = styled.div`
  display: flex;
  border-bottom: 1px solid whitesmoke;
  width: 60%;
  padding: 3px;

  label {
    width: 30%;
    min-width: 100px;
  }
`;

export const StyledStars = styled.div`
  display: flex;
  align-content: space-between;
  img {
    width: 20px;
    height: auto;
    padding: 2px;
  }
`;
export const StyledNoReviews = styled.div`
  text-align: center;
  h4 {
    color: #03525b;
    font-size: 2rem;
    padding: 30px 0;
  }

  p {
    font-size: 1.5rem;
    padding-bottom: 35px;
  }
  button {
    width: 250px;
    height: 50px;
    background-color: #56c1cb;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 30px;
  }
  @media (min-width: 600px) {
    h4 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
      padding-bottom: 35px;
    }
  }
`
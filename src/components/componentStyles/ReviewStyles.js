import styled from 'styled-components';

export const StyledReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
`;

export const StyledReviewRatings = styled.div`
  padding-left: 10px;
  background: #fff;
  width: 40%;
`;

export const StyledReviewCard = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  margin: 15px;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
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

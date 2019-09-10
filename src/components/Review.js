import React from 'react';
import Stars from './Stars';
import { StyledReview } from './componentStyles/ReviewStyles';

const Review = props => {
  const { title, starNumber } = props;
  return (
    <StyledReview>
      <label>{title}</label>
      <div>
        <Stars starNumber={starNumber} />
      </div>
    </StyledReview>
  );
};

export default Review;

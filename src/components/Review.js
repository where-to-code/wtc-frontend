import React from 'react';
import Stars from './Stars';
import { StyledReview } from './componentStyles/ReviewStyles';

const Review = props => {
  const { title, starNumber, isStatic } = props;
  return (
    <StyledReview>
      <label>{title}</label>
      <div>
        <Stars isStatic={isStatic} starNumber={starNumber} />
      </div>
    </StyledReview>
  );
};

export default Review;


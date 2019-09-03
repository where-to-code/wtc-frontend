import React from 'react';
import star from '../assets/star_rating.png';
import { StyledStars } from './componentStyles/ReviewStyles';

const Stars = props => {
  const { starNumber } = props;
  let i;
  let starsArray = [];
  for (i = 0; i < starNumber; i++) {
    starsArray.push(<img className="star" key={i} src={star} alt="star" />);
  }
  if (starsArray.length === 0) {
    return <span className="extra-small">Not rated</span>;
  } else {
    return <StyledStars id="stars-rating">{starsArray}</StyledStars>;
  }
};

export default Stars;

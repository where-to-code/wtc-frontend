import React from 'react';
import star from '../assets/star_rating.png';

const Stars = props => {
  const { starNumber } = props;
  let i;
  let starsArray = [];
  for (i = 1; i < starNumber; i++) {
    starsArray.push(<img className="star" key={i} src={star} alt="star" />);
  }
  if (starsArray.length === 0) {
    return <span className="extra-small">Not rated</span>;
  } else {
    return (
      <div className="flex" id="stars-rating">
        {starsArray}
      </div>
    );
  }
};

export default Stars;

import React from 'react';
import star from '../assets/star_rating.png';

export default function Stars(props) {
  console.log(props);
  let starsArray = [];
  for (let i = 0; i < props.starNumber; i++) {
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
}

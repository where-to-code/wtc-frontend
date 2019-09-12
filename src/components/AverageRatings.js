import React from 'react';
import { StyledAverage } from './componentStyles/RatingStyles';

const AverageRatings = props => {
  const { location } = props;
  return (
    <StyledAverage>
      <h3>Average Rating</h3>
      <p>{location.averageRating}</p>
      {location.averageRating.Disclaimer && <p>{location.averageRating.message}</p>}
      <div>
        <button>Add a Review</button>
        <button>Add to Favourites</button>
      </div>
    </StyledAverage>
  );
};

export default AverageRatings;

import React from 'react';
import { StyledCard } from './componentStyles/SearchPageStyles';

const LocationCard = props => {
  const { location } = props;
  return (
    <StyledCard>
      <img src={location.image_url} alt={location.name} />
      <div className="desc">
        <h4>{location.name}</h4>
      </div>
    </StyledCard>
  );
};

export default LocationCard;

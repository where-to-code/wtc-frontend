import React, { useState, useEffect } from 'react';
import { StyledCard } from './componentStyles/SearchPageStyles';

const LocationCard = props => {
  const { location, active } = props;

  return (
    <StyledCard active={active}>
      <img src={location.image_url} alt={location.name} />
      <div className="desc">
        <h4>{location.name}</h4>
        <div>{location.address}</div>
      </div>
    </StyledCard>
  );
};

export default LocationCard;

import React from 'react';
import { StyledLocationBanner } from './componentStyles/LocationBannerStyles';

const LocationBanner = props => {
  const { location, setEditing } = props;
  return (
    <StyledLocationBanner>
      <div className="banner-img">
        <img src={location.image_url} alt="Location visual" />
        <h3>{location.name}</h3>
      </div>
      <div className="banner-desc">
        <div>
          <h3>Address</h3>
          <p>{location.address}</p>
        </div>
        <div>
          <h3>Description</h3>
          <div className='edit'>
            <p>{location.description}</p>
            <span onClick={() => setEditing(true)}>&#x270E;</span>
          </div>
        </div>
      </div>
    </StyledLocationBanner>
  );
};

export default LocationBanner;

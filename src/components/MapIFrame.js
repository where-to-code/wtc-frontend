import React from 'react';
import StyledIFrame from './componentStyles/IFrameStyle';

export default ({ location }) => {
  const { latitude, longitude } = location;
  return (
    <StyledIFrame>
      <iframe
        title="Location map"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${latitude},${longitude}`}
        allowFullScreen
      />
    </StyledIFrame>
  );
};

import React, { useState, useEffect } from 'react';
import { StyledNoGeoLocation } from './componentStyles/LocationErrStyles';

export default () => {
  const [toggleNoLoc, setToggleNoLoc] = useState(false);

  const hideNoLoc = () => setToggleNoLoc(!toggleNoLoc);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      () => setToggleNoLoc(false),
      () => setToggleNoLoc(true),
    );
  });

  return (
    <StyledNoGeoLocation toggleNoLoc={toggleNoLoc}>
      <div>
        <p>
          Your browser doesn't support Geolocation, or you didn't allow it.
          Centering the map to a default location
        </p>
        <button onClick={() => hideNoLoc()}>&times;</button>
      </div>
    </StyledNoGeoLocation>
  );
};

import React, { useState, useEffect } from 'react';
import { StyledNoGeoLocation } from './componentStyles/LocationErrStyles';

export default () => {
  const [toggleNoLoc, setToggleNoLoc] = useState(false);

  const hideNoLoc = () => setToggleNoLoc(!toggleNoLoc);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        () => setToggleNoLoc(false),
        () => setToggleNoLoc(true),
      );
    } else {
      setToggleNoLoc(true);
    }
    
  }, []);

  return (
    <StyledNoGeoLocation toggleNoLoc={toggleNoLoc}>
      <div>
        <p>
          Your browser doesn't support Geolocation, or you didn't allow it.
          Centering the map to a default location
        </p>
        <button onClick={() => hideNoLoc(false)}>&times;</button>
      </div>
    </StyledNoGeoLocation>
  );
};

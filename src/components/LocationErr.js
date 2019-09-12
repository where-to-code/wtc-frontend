import React, { useEffect } from 'react';
import { mapPromise } from '../redux/helpers';
import { StyledLocationErr } from './componentStyles/LocationErrStyles';
import { setGeolocationValue, clearLocations } from '../redux/actionCreators';

const LocationErr = (props) => {
  const { history } = props
  useEffect(() => {
    Promise.resolve(mapPromise).then(mapObject => {
      const autocomplete = new mapObject.maps.places.Autocomplete(
        document.getElementById('location-seach')
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();

        setGeolocationValue({ lat: latitude, lng: longitude });
        clearLocations();
        history.push('/');
      });
    });
  });

  return (
    <StyledLocationErr>
      <h4>Sorry, we couldn't find any location around you</h4>
      <p>Maybe you want to try again</p>
      <button onClick={() => window.location.reload()}>
        Find places near you
      </button>
      <p>Or suggest us a location</p>
      <button>Add a Location</button>
      <p>Or use our search feature</p>
      <form type="submit">
        <input id="location-seach" type="text" placeholder="Search" />
        <input type="submit" value="" />
      </form>
    </StyledLocationErr>
  );
};

export default LocationErr;

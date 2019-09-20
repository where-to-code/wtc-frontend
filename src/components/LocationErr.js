import React, { useEffect } from 'react';
import { mapPromise } from '../redux/helpers';
import { StyledLocationErr } from './componentStyles/LocationErrStyles';
import { connect } from 'react-redux';
import { showAddLocation, setGeolocationValue } from '../redux/actionCreators';

const LocationErr = (props) => {
  const { showAddLocation, setGeolocationValue } = props;

  useEffect(() => {
    Promise.resolve(mapPromise).then(mapObject => {
      const autocomplete = new mapObject.maps.places.Autocomplete(
        document.getElementById('location-seach')
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();;
        setGeolocationValue({ lat: latitude, lng: longitude });
      });
    });
  });

  const onAddLocation = () => {
    showAddLocation();
  }

  return (
    <StyledLocationErr>
      <h4>Sorry, we couldn't find any location around you</h4>
      <h6>If you have active filters you could try to disable them. <br /> Otherwise you could chose one of the options below.</h6>
      <p>You could search for a place manually </p>
      <form type="submit">
        <input id="location-seach" type="text" placeholder="Search" />
        <input type="submit" value="" />
      </form>
      <p>Or just add a new place here</p>
      <button onClick={onAddLocation}>Add a Place</button>
    </StyledLocationErr>
  );
};

function mapStateToProps(state) {
  return {
    userId: state.auth.userId,
  };
}

export default connect(
  mapStateToProps,
  { setGeolocationValue, showAddLocation }
)(LocationErr);

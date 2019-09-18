import React, { useEffect, useState } from 'react';
import { mapPromise } from '../redux/helpers';
import { StyledLocationErr } from './componentStyles/LocationErrStyles';
import { connect } from 'react-redux';
import { getCookie } from './helpers/authHelpers';
import AddLocation from '../components/AddLocation';
import { Redirect } from 'react-router-dom';
import { clearLocations } from '../redux/actionCreators';

const LocationErr = (props) => {
  const { newSearch, clearLocations } = props;
  const [ addNewLocationReq, setAddNewLocationReq ] = useState(false);
  const [ authRequired, setAuthRequired ] = useState(false)
  useEffect(() => {
    Promise.resolve(mapPromise).then(mapObject => {
      const autocomplete = new mapObject.maps.places.Autocomplete(
        document.getElementById('location-seach')
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();

        newSearch({ lat: latitude, lng: longitude });
      });
    });
  });

  const onAddLocation = () =>{
    if(getCookie(props.userId)) {
      setAddNewLocationReq(true);
      // to be managed with props later
      document.getElementById('add-location-form').style.display = 'flex';
    }
    else {
      setAuthRequired(true);
    }
  }

  if (authRequired) {
    return (
      <Redirect to="/login" />
    );
  }

  return (
    <StyledLocationErr>
      <h4>Sorry, we couldn't find any location around you</h4>
      <h6>If you have active filters you could try to disable them. <br/> Otherwise you could chose one of the options below.</h6>
      <p>You could search for a place manually </p>
      <form type="submit">
        <input id="location-seach" type="text" placeholder="Search" />
        <input type="submit" value="" />
      </form>
      <p>Or suggest us a new place to add</p>
      <button onClick={onAddLocation}>Add a Place</button>
      {
        addNewLocationReq && <AddLocation />
      }
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
  { clearLocations }
)(LocationErr);

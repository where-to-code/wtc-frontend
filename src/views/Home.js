import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router'
import { StyledHome } from './ViewStyles/HomeStyles';
import Header from '../components/Header';
import { mapPromise } from '../redux/helpers';
import { setGeolocationValue, clearLocations } from '../redux/actionCreators';

const Home = ({ setGeolocationValue, clearLocations, history }) => {
  const [pos, updatePos] = useState(false);

  useEffect(() => {
    Promise.resolve(mapPromise).then(mapObject => {
      const autocomplete = new mapObject.maps.places.Autocomplete(
        document.getElementById('mapSuggestions'),
      );

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();

        setGeolocationValue({ lat: latitude, lng: longitude });
        clearLocations();
        updatePos(true);
      });
    });
  });

  const handleClick = () => {
    setGeolocationValue(null);
    clearLocations();
    history.push('/locations');
  };

  return pos ? (
    <Redirect to="/locations" />
  ) : (
    <StyledHome>
      <Header landing={true} />
      <div className="container">
        <h2>Find the best places to code</h2>
        <form type="submit">
          <input
            type="text"
            placeholder="Search and select a place"
            id="mapSuggestions"
          />
        </form>
        <button onClick={handleClick}>Find places near you</button>
      </div>
    </StyledHome>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setGeolocationValue,
      clearLocations,
    },
    dispatch,
  );
}

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(Home)) 

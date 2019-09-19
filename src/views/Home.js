import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledHome } from './ViewStyles/HomeStyles';
import Header from '../components/Header';
import { mapPromise } from '../redux/helpers';
import { setGeolocationValue, clearLocations } from '../redux/actionCreators';

const Home = ({ setGeolocationValue, clearLocations, history }) => {
  const [pos, updatePos] = useState(false);

  useEffect(() => {
    Promise.resolve(mapPromise).then(mapObject => {
      const autocomplete = new mapObject.maps.places.Autocomplete(
        document.getElementById('mapSuggestions')
      );
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();

        setGeolocationValue({ lat: latitude, lng: longitude });
        clearLocations();
        updatePos(true);
        history.push('/locations');
      });
    });
  });

  const handleClick = () => {
    setGeolocationValue(null);
    clearLocations();
    history.push('/locations');
  };

  return (
    <StyledHome>
      <Header landing={true} />
      <div className="container">
        <h2>Where will you work from today?</h2>
        <div className="row">
        <div className="row-half">
          <h3>Places around me</h3>
          <button onClick={handleClick}>Find places near me</button>
        </div>
        <div className="row-half">
          <h3>Search anywhere else</h3>
        <form type="submit">
          <input
            type="text"
            placeholder="Search and select a place"
            id="mapSuggestions"
          />
        </form>
        </div>
        </div>

      </div>
    </StyledHome>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setGeolocationValue,
      clearLocations
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Home);

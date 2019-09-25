import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledHome } from './ViewStyles/HomeStyles';
import Header from '../components/Header';
import { mapPromise } from '../redux/helpers';
import { setGeolocationValue, clearLocations, clearAllLocations } from '../redux/actionCreators';

const Home = props => {
const { setGeolocationValue, clearLocations, history, clearAllLocations } = props;
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
        clearAllLocations();
        history.push('/locations');
      });
    });
  });

  const handleClick = () => {
    setGeolocationValue(null);
    clearLocations();
    clearAllLocations();
    history.push('/locations');
  };

  return (    
    <StyledHome>
      <Header landing={true} {...props} />
      <div className="container">
        <h2>Where will you work from today?</h2>
        <div className="row">
        <div className="row-half">
          <h3>Find places around me</h3>
          <button onClick={handleClick}>Geo locate me</button>
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
      clearLocations,
      clearAllLocations
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(Home);

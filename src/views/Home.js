import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import { StyledHome } from './ViewStyles/HomeStyles';
import Header from '../components/Header';
import { mapPromise } from '../redux/helpers';
import {
  setGeolocationValue,
  clearLocations,
  mapsLoading,
  mapsSucces,
} from '../redux/actionCreators';

const Home = ({
  setGeolocationValue,
  clearLocations,
  mapsObj,
  mapsLoading,
  mapsSucces,
}) => {
  const [pos, updatePos] = useState(false);

  // Promise.resolve(mapPromise).then(() => {
  //   /*global google*/ // To disable any eslint 'google not defined' errors
  //   const autocomplete = new google.maps.places.Autocomplete(
  //     document.getElementById('mapSuggestions'),
  //   );
  //     // console.log(google);
  //   autocomplete.addListener('place_changed', () => {
  //     const place = autocomplete.getPlace();

  //     const latitude = place.geometry.location.lat();
  //     const longitude = place.geometry.location.lng();

  //     setGeolocationValue({ lat: latitude, lng: longitude });
  //     clearLocations();
  //     updatePos(true);
  //   });
  // });

  useEffect(() => {
    // if (!mapsObj) {
    //   mapsLoading();
    // } else {
    //   console.log(mapsObj);
    //   mapsObj.map.places.Autocomplete(document.getElementById('mapSuggestions'));
    // }

    Promise.resolve(mapPromise).then(mapObject => {
      /*global google*/ // To disable any eslint 'google not defined' errors
      // mapsSucces(mapObject.maps);
      // console.log(mapObject.maps)

      const autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('mapSuggestions'),
      );
      // console.log(google);
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
            placeholder="Search for places"
            id="mapSuggestions"
          />
          {/* <input type="submit" value="" /> */}
        </form>
        <Link to="/locations">
          <button>Find places near you</button>
        </Link>
      </div>
    </StyledHome>
  );
};

function mapStateToProps(state) {
  return {
    mapsObj: state.maps.mapsObj,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setGeolocationValue,
      clearLocations,
      mapsLoading,
      mapsSucces,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

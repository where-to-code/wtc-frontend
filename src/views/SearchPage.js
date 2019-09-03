import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Map from '../components/Map';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import { StyledSearch, StyledLoader } from './ViewStyles/SearchPageStyles';
import { StyledMap } from '../components/componentStyles/MapStyles';
import LocationErr from '../components/LocationErr';
import FilterPane from '../components/FilterPane';
import {
  locationLoads,
  setGeolocationFalse,
  setGeolocationTrue
} from '../redux/actionCreators';

import NoGeoLocation from '../components/NoGeoLocation';
const SearchPage = props => {
  const {
    geolocation,
    locationLoads,
    loadingLocation,
    locationsErr,
    isGeolocated,
    setGeolocationFalse,
    setGeolocationTrue
  } = props;

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) setGeolocationTrue();
    else setGeolocationFalse();
    console.log(locationsErr);

    locationLoads(geolocation);
  }, [geolocation]);

  const show = () => setToggle(!toggle);

  return (
    <>
      <Header />
      <StyledSearch>
        <div>
          <FilterPane toggle={toggle} show={show} />
          {!isGeolocated && <NoGeoLocation />}
          {loadingLocation && (
            <StyledLoader>
              <Loader type="Oval" color="#56c1cb" height={80} width={80} />
            </StyledLoader>
          )}
          {locationsErr && locationsErr !== "currentLocation is null" && <LocationErr />}
          <CardContainer />
        </div>
        <StyledMap>
          <Map />
        </StyledMap>
      </StyledSearch>
    </>
  );
};

const mapStateToProps = state => ({
  locations: state.locations.locations,
  locationsErr: state.locations.error,
  loadingLocation: state.locations.loadingLocation,
  geolocation: state.maps.geolocation,
  activeLocation: state.activeLocation,
  isGeolocated: state.maps.isGeolocated
});

export default connect(
  mapStateToProps,
  { locationLoads, setGeolocationFalse, setGeolocationTrue }
)(SearchPage);

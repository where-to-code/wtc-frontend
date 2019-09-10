import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Map from '../components/Map';
import Header from '../components/Header';
import CardContainer from '../components/CardContainer';
import {
  StyledSearch,
  StyledLoader,
  LeftPane
} from './ViewStyles/SearchPageStyles';
import { StyledMap } from '../components/componentStyles/MapStyles';
import LocationErr from '../components/LocationErr';
import FilterPane from '../components/FilterPane';
import {
  filterLocations,
  locationLoads,
  setGeolocationFalse,
  setGeolocationTrue
} from '../redux/actionCreators';

import NoGeoLocation from '../components/NoGeoLocation';
const SearchPage = props => {
  const {
    filterLocations,
    allLocations,
    geolocation,
    locationLoads,
    loadingLocation,
    locationsErr,
    isGeolocated,
    setGeolocationFalse,
    setGeolocationTrue
  } = props;

  useEffect(() => {
    if (navigator.geolocation) setGeolocationTrue();
    else setGeolocationFalse();

    locationLoads(geolocation);
  }, [geolocation]);

  function setNewLocations(choices) {
    const filteredLocation = allLocations.filter(
      loc =>
        ((choices.wifi && loc.avg_wifi_speed >= 3) || !choices.wifi) &&
        ((choices.quiet && loc.avg_quietness >= 3) || !choices.quiet) &&
        ((choices.accessibility && loc.avg_accessibility >= 3) ||
          !choices.accessibility) &&
        ((choices.community && loc.avg_community >= 3) || !choices.community)
    );
    filterLocations({ data: filteredLocation });
  }

  return (
    <>
      <Header />
      <StyledSearch>
        <LeftPane>
          <FilterPane setNewLocations={setNewLocations} />
          {!isGeolocated && <NoGeoLocation />}
          {loadingLocation && (
            <StyledLoader>
              <Loader type="Oval" color="#56c1cb" height={80} width={80} />
            </StyledLoader>
          )}
          {locationsErr && locationsErr !== 'currentLocation is null' && (
            <LocationErr />
          )}
          <CardContainer />
        </LeftPane>
        <StyledMap>
          <Map />
        </StyledMap>
      </StyledSearch>
    </>
  );
};

const mapStateToProps = state => ({
  allLocations: state.locations.allLocations,
  locationsErr: state.locations.error,
  loadingLocation: state.locations.loadingLocation,
  geolocation: state.maps.geolocation,
  activeLocation: state.activeLocation,
  isGeolocated: state.maps.isGeolocated
});

export default connect(
  mapStateToProps,
  { locationLoads, setGeolocationFalse, setGeolocationTrue, filterLocations }
)(SearchPage);

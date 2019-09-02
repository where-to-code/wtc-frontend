import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Map from '../components/Map';
import Header from '../components/Header';
import {
  StyledSearch,
  CardContainer,
  StyledLoader
} from './ViewStyles/SearchPageStyles';
import { StyledMap } from '../components/componentStyles/MapStyles';
import LocationErr from '../components/LocationErr';
import FilterPane from '../components/FilterPane';
import { locationLoads } from '../redux/actionCreators';
import LocationCard from '../components/LocationCard';
import NoGeoLocation from '../components/NoGeoLocation';
const SearchPage = props => {
  const {
    geolocation,
    locations,
    locationLoads,
    loadingLocation,
    activeLocation,
    locationsErr,
    isGeolocated
  } = props;

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (geolocation) {
      locationLoads(geolocation);
    }
  }, [geolocation]);

  const show = () => setToggle(!toggle);

  return (
    <div>
      <Header />
      <StyledSearch>
        <div>
          <FilterPane toggle={toggle} show={show} />
          {!isGeolocated && <NoGeoLocation />}
          {loadingLocation && locations.length <= 0 && (
            <StyledLoader>
              <Loader type="Oval" color="#56c1cb" height={80} width={80} />
            </StyledLoader>
          )}
          {locationsErr && <LocationErr />}
          <CardContainer>
            {locations.length > 0 &&
              locations.map(place => {
                if (
                  activeLocation &&
                  activeLocation.latitude === place.latitude &&
                  activeLocation.longitude === place.longitude
                ) {
                  return (
                    <LocationCard
                      key={place.name}
                      location={place}
                      active={true}
                    />
                  );
                } else {
                  return <LocationCard key={place.name} location={place} active={false} />;
                }
              })}
          </CardContainer>
        </div>
        <StyledMap>
          <Map />
        </StyledMap>
      </StyledSearch>
    </div>
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
  { locationLoads }
)(SearchPage);

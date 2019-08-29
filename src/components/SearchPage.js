import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Map from './Map';
import Header from './Header';
import {
  StyledSearch,
  CardContainer,
  StyledLoader,
  StyledMap,
} from './componentStyles/SearchPageStyles';
import LocationErr from './LocationErr'
import FilterPane from './FilterPane';
import { locationLoads } from '../redux/actionCreators';
import LocationCard from './LocationCard';
import NoGeoLocation from './NoGeoLocation';
const SearchPage = props => {
  const { geolocation, locations, locationLoads, loadingLocation, activeLocation, locationsErr, isGeolocated } = props;

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
          {!isGeolocated &&
            <NoGeoLocation />
          }
          {loadingLocation && (
            <StyledLoader>
              <Loader type="Oval" color="#56c1cb" height={80} width={80} />
            </StyledLoader>
          )}
          {locationsErr && (
            <LocationErr />
          )}
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
                  return <LocationCard key={place.name} location={place} />;
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
  isGeolocated: state.maps.isGeolocated,
});

export default connect(
  mapStateToProps,
  { locationLoads }
)(SearchPage);

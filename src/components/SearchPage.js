import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import Map from './Map';
import Header from './Header';
import {
  StyledSearch,
  CardContainer,
  StyledLoader,
  StyledMap
} from './componentStyles/SearchPageStyles';
import FilterPane from './FilterPane';
import { locationLoads } from '../redux/actionCreators';
import LocationCard from './LocationCard';
const SearchPage = props => {
  const { geolocation, locations, locationLoads, loadingLocation, activeLocation } = props;

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (Object.keys(geolocation).length > 0) {
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
          {loadingLocation && (
            <StyledLoader>
              <Loader type="Oval" color="#56c1cb" height={80} width={80} />
            </StyledLoader>
          )}
          <CardContainer>
            {locations &&
              locations.map(place => {
                if (activeLocation && activeLocation.latitude === place.latitude && activeLocation.longitude === place.longitude) {
                  return <LocationCard key={place.name} location={place} active={true}/>
                }
                return <LocationCard key={place.name} location={place} />;
              })}
          </CardContainer>
        </div>
        <StyledMap>
          <Map locations={locations} />
        </StyledMap>
      </StyledSearch>
    </div>
  );
};

const mapStateToProps = state => ({
  locations: state.locations.locations,
  loadingLocation: state.locations.loadingLocation,
  geolocation: state.maps.geolocation,
  activeLocation: state.activeLocation
});

export default connect(
  mapStateToProps,
  { locationLoads }
)(SearchPage);

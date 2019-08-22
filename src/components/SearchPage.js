import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import Header from './Header';
import { StyledSearch, CardContainer } from './componentStyles/SearchPageStyles';
import FilterPane from './FilterPane';
import { locationLoads } from '../redux/actionCreators';
import LocationCard from './LocationCard';
const SearchPage = props => {
  const { locations, loadingLocation, locationLoads } = props;
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // locationLoads();
    setPlaces(locations);
  }, []);
  console.log(props);
  return (
    <div>
      <Header />
      <StyledSearch>
        <FilterPane />
        <CardContainer>
          {loadingLocation && <div>Loading...</div>}
          {locations &&
            places.map(place => {
              return <LocationCard key={place.name} location={place} />;
            })}
        </CardContainer>
        <Map />
      </StyledSearch>
    </div>
  );
};

const mapStateToProps = state => ({
  locations: state.location.locations,
  loadingLocation: state.location.loadingLocation
});

export default connect(
  mapStateToProps,
  { locationLoads }
)(SearchPage);

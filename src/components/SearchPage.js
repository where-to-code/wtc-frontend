import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import Header from './Header';
import {
  StyledSearch,
  CardContainer
} from './componentStyles/SearchPageStyles';
import FilterPane from './FilterPane';
import { locationLoads } from '../redux/actionCreators';
import LocationCard from './LocationCard';
const SearchPage = props => {
  const { locations } = props;
  const [toggle, setToggle] = useState(false);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // locationLoads();
    setPlaces(locations);
  }, []);

  const show = () => setToggle(!toggle);

  return (
    <div>
      <Header />
      <StyledSearch>
        <div>
          <FilterPane toggle={toggle} show={show} />
          <CardContainer>
            {locations &&
              places.map(place => {
                return <LocationCard key={place.name} location={place} />;
              })}
          </CardContainer>
        </div>
        <Map />
      </StyledSearch>
    </div>
  );
};

const mapStateToProps = state => ({
  locations: state.locations.locations,
  // loadingLocation: state.location.loadingLocation
});

export default connect(
  mapStateToProps,
  { locationLoads }
)(SearchPage);

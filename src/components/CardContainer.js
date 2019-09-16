import React from 'react';
import { connect } from 'react-redux';
import { StyledCardContainer } from './componentStyles/CardContStyles';
import LocationCard from './LocationCard';
import { filterLocations } from '../redux/actionCreators/locationsActionCreators';
const CardContainer = props => {
  const { locations, activeLocation } = props;

  return (
    <StyledCardContainer>
      {locations.length > 0 &&
        locations.map(place => {
          if (
            activeLocation &&
            activeLocation.latitude === place.latitude &&
            activeLocation.longitude === place.longitude
          ) {
            return (
              <LocationCard key={place.name} location={place} active={true} />
            );
          } else {
            return <LocationCard key={place.name} location={place} />;
          }
        })}
      {locations.length === 0 && (
        <div>Sorry, no locations match these criterias</div>
      )}
    </StyledCardContainer>
  );
};

const mapStateToProps = state => ({
  locations: state.locations.locations,
  allLocations: state.locations.allLocations,
  activeLocation: state.activeLocation
});

export default connect(
  mapStateToProps,
  { filterLocations }
)(CardContainer);

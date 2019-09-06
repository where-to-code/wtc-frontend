import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { StyledCardContainer } from './componentStyles/CardContStyles';
import LocationCard from './LocationCard';
import { filterLocations } from '../redux/actionCreators';
const CardContainer = props => {
  const { locations, activeLocation, choices } = props;

  const filteredLocation = locations.filter(
    loc =>
      ((choices.wifi && loc.avg_wifi_speed >= 3) || !choices.wifi) &&
      ((choices.quiet && loc.avg_quietness >= 3) || !choices.quiet) &&
      ((choices.accessibility && loc.avg_accessibility >= 3) ||
        !choices.accessibility) &&
      ((choices.community && loc.avg_community >= 3) || !choices.community)
  );

  return (
    <StyledCardContainer>
      {filteredLocation.length > 0 &&
        filteredLocation.map(place => {
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
    </StyledCardContainer>
  );
};

const mapStateToProps = state => ({
  locations: state.locations.locations,
  activeLocation: state.activeLocation
});

export default connect(
  mapStateToProps,
  { filterLocations }
)(CardContainer);

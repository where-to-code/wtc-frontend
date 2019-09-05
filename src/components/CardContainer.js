import React from 'react';
import { connect } from 'react-redux';
import { StyledCardContainer } from './componentStyles/CardContStyles';
import LocationCard from './LocationCard';
const CardContainer = props => {
  const { locations, activeLocation, choices } = props;
  // const [filtered, setFilter] = useState(locations);

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

      {/* {locations.length > 0 &&
        locations.map(place => {
          if (
            activeLocation &&
            activeLocation.latitude === place.latitude &&
            activeLocation.longitude === place.longitude
          ) {
            return (
              <LocationCard key={place.name} location={place} active={true} />
            );
          }
          if (choices.wifi && place.avg_wifi_speed >= 3) {
            console.log(place);
            return <LocationCard key={place.name} location={place} />;
          }
          if (!choices.wifi) {
            return <LocationCard key={place.name} location={place} />;
          }
        })} */}
    </StyledCardContainer>
  );
};

const mapStateToProps = state => ({
  locations: state.locations.locations,
  activeLocation: state.activeLocation
});

export default connect(
  mapStateToProps,
  null
)(CardContainer);

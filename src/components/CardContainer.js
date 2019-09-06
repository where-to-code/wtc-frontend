import React from 'react';
import { connect } from 'react-redux';
import { StyledCardContainer } from './componentStyles/CardContStyles'
import LocationCard from './LocationCard'
const CardContainer = props => {
    const { locations, activeLocation } = props;

    return (
        <StyledCardContainer>
        {locations && locations.length > 0 &&
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
      </StyledCardContainer>
    )
}

const mapStateToProps = state => ({
    locations: state.locations.locations,
    activeLocation: state.activeLocation,
  });
  
  export default connect(
    mapStateToProps, null
  )(CardContainer);
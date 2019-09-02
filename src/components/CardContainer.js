import React from 'react';
import { connect } from 'react-redux';
import { StyledCardContainer } from './componentStyles/CardContStyles'
import LocationCard from './LocationCard'
const CardContainer = props => {
    const { locations, activeLocation } = props;
    const scrollToCard = (divId) =>{
      let elm = document.getElementById(divId)
      elm.scrollIntoView();
      // console.log('divId', divId);
      // console.log('scrollHeight', elm)
    }

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
                <LocationCard
                  key={place.name}
                  location={place}
                  active={true}
                  scroll = {scrollToCard(place.id)}
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
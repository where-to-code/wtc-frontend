import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMap } from './componentStyles/MapStyles';
import {
  mapsLoading,
  setActive,
  setGeolocationValue,
} from '../redux/actionCreators';
import { modalInit, markerInit, mapInit, position } from './helpers/mapHelpers';
import markerBlue from '../assets/icons8-marker-40.png';
import { mapPromise } from '../redux/helpers';

const Map = props => {
  const {
    geolocation,
    mapsLoading,
    locations,
    setActive,
    activeLocation,
    setGeolocationValue,
  } = props;

  const updateView = location => {
    let elm = document.getElementById(location.id);
    elm.scrollIntoView();
    setActive(location);
  };

  useEffect(() => {

    Promise.resolve(mapPromise).then(async mapObject => {
      let map;
      let mapCenter;
      // if we receive a geoloc from the search bar
      // set map center to the searched place
      if(geolocation) {
        mapCenter = geolocation;
      }
      // if we receive an geoloc from active location
      else if (activeLocation) {
        mapCenter = {
          lat: Number(activeLocation.latitude),
          lng: Number(activeLocation.longitude),
        };
      }
      // Otherwise we default the map center
      else mapCenter = await position();

      if (!geolocation) setGeolocationValue(mapCenter);
      mapsLoading();
      map = mapInit(mapObject.maps, mapCenter);
      // We add markers and modals to locations
      if (locations.length > 0) {
        locations.forEach(location => {
          let marker;
          const selectedLocation =
            activeLocation && activeLocation.name === location.name;

          if (selectedLocation) {
            const modal = modalInit(mapObject.maps, location);
            marker = markerInit(map, mapObject.maps, location);
            modal.open(map, marker);
          } else {
            marker = markerInit(map, mapObject.maps, location, markerBlue);
          }
          marker.addListener('click', () => updateView(location));
        });
      }
    });
    // eslint-disable-next-line
  }, [locations.length, geolocation, activeLocation]);

  return <StyledMap id="map" />;
};

function mapStateToProps(state) {
  return {
    geolocation: state.maps.geolocation,
    locations: state.locations.locations,
    activeLocation: state.activeLocation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      mapsLoading,
      setActive,
      setGeolocationValue,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);

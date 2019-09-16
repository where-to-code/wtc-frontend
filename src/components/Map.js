import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMap } from './componentStyles/MapStyles';
import {
  mapsLoading,
  setGeolocationValue,
  setGeolocationTrue,
  setGeolocationFalse
} from '../redux/actionCreators/mapsActionCreators';
import { setActive } from '../redux/actionCreators/activeLocationActionCreators'
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
    setGeolocationTrue,
    setGeolocationFalse
  } = props;

  // Set the default position to Trafalgar Square, London
  let mapCenter = { lat: 51.504831314, lng: -0.123499506 };

  if (activeLocation) {
    mapCenter = {
      lat: Number(activeLocation.latitude),
      lng: Number(activeLocation.longitude)
    };
  }

  const updateView = location => {
    let elm = document.getElementById(location.id);
    elm.scrollIntoView();
    setActive(location);
  };

  useEffect(() => {
    Promise.resolve(mapPromise).then(async mapObject => {
      // mapCenter give the current position of the user if autorized
      // or London if not authorized
      mapCenter = await position(mapCenter);
      if (geolocation) {
        mapCenter = geolocation;
      }
      mapsLoading();
      const map = mapInit(mapObject.maps, mapCenter);
      if (!geolocation) {
        setGeolocationValue(mapCenter);
      }
      else if (geolocation.lat === 51.504831314 && geolocation.lng === -0.123499506) {
        setGeolocationFalse();
      }
      else {
        // we have a value in geolocation and its not the default value
        // it means that the user has triggerd a search with a different geoloc
        setGeolocationValue(geolocation);
        setGeolocationTrue();
      }
      // We add markers and modals to locations
      if (locations.length > 0) {
        locations.map(location => {
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
  }, [geolocation, locations.length]);

  return <StyledMap id="map" />;
};

function mapStateToProps(state) {
  return {
    geolocation: state.maps.geolocation,
    locations: state.locations.locations,
    activeLocation: state.activeLocation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      mapsLoading,
      setActive,
      setGeolocationValue,
      setGeolocationTrue,
      setGeolocationFalse
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

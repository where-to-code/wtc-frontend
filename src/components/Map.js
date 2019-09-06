import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMap } from './componentStyles/MapStyles';
import {
  mapsLoading,
  // locationLoads,
  setActive,
  setGeolocationValue,
} from '../redux/actionCreators';
import { modalInit, markerInit, mapInit, position } from './helpers/mapHelpers';
import markerBlue from '../assets/icons8-marker-40.png';
import { mapPromise } from '../redux/helpers';

const Map = props => {
  const {
    // mapsObj,
    geolocation,
    mapsLoading,
    locations,
    // singleLocCoord,
    setActive,
    activeLocation,
    setGeolocationValue,
  } = props;

  // Set the default position to Trafalgar Square, London
  let mapCenter = { lat: 51.504831314, lng: -0.123499506 };

  // let center;

  if (activeLocation) {
    mapCenter = {
      lat: Number(activeLocation.latitude),
      lng: Number(activeLocation.longitude),
    };
  }

  const updateView = location => {
    let elm = document.getElementById(location.id);
    elm.scrollIntoView();
    setActive(location);
  };

  useEffect(() => {
    Promise.resolve(mapPromise).then(async mapObject => {
      // we need to use a wrapper to use async functions inside UseEffect
      // const asyncWrap = async () => {
        // we get the user Geolocation, if we can't this return the default position

        let map;
        mapCenter = await position(mapCenter);

        if (!geolocation) {
          map = mapInit(mapObject.maps, mapCenter);
          setGeolocationValue(mapCenter);
          mapsLoading()
        }
        else{
          map = mapInit(mapObject.maps, geolocation);
          mapsLoading()
        }
        // If we already got the mapObj we build the map
        // if (mapObject) {
        //   setGeolocationValue(singleLocCoord);
          

        // if (mapObject) map = mapInit(mapObject.maps, geolocation);
        // //Or we fetch it from google API before
        // else if (!geolocation) {
        //   setGeolocationValue(mapCenter);
        //   mapsLoading();
        // } else {
        //   mapsLoading();
        // }

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
      // };
      // asyncWrap();
    });
  }, 
  // [activeLocation, locations.length, geolocation]
  );

  return <StyledMap id="map" />;
};

function mapStateToProps(state) {
  return {
    // mapsObj: state.maps.mapsObj,
    geolocation: state.maps.geolocation,
    locations: state.locations.locations,
    activeLocation: state.activeLocation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      mapsLoading,
      // locationLoads,
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

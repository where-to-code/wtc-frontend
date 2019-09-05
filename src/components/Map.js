import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMap } from './componentStyles/MapStyles';
import { mapsLoading, locationLoads, setActive, setGeolocationValue } from '../redux/actionCreators';
import { modalInit, markerInit, mapInit, position } from './helpers/mapHelpers';
import markerBlue from '../assets/icons8-marker-40.png';

const Map = props => {
  const {
    mapsObj,
    geolocation,
    mapsLoading,
    locations,
    singleLocCoord,
    setActive,
    activeLocation,
    setGeolocationValue
  } = props;

  // Set the default position to Trafalgar Square, London
  let mapCenter = { lat: 51.504831314, lng: -0.123499506 };

  let center;

  if (activeLocation) {
    center = {
      lat: Number(activeLocation.latitude),
      lng: Number(activeLocation.longitude),
    };

    mapCenter = center;
  }

  const updateView = (location) =>{
    let elm = document.getElementById(location.id)
    elm.scrollIntoView();
    setActive(location);
  }

  useEffect(() => {
    // we need to use a wrapper to use async functions inside UseEffect
    const asyncWrap = async () => {
      // we get the user Geolocation, if we can't this return the default position
      mapCenter = await position(mapCenter);
      let map;
      // If we already got the mapObj we build the map
      if (mapsObj && singleLocCoord) {
        setGeolocationValue(singleLocCoord);
        map = mapInit(mapsObj, geolocation);
      } 
      else if (mapsObj) map = mapInit(mapsObj, geolocation);
      //Or we fetch it from google API before
      else if (!geolocation) {
        setGeolocationValue(mapCenter);
        mapsLoading();
      }
      else {
        mapsLoading();
      } 

      // if (!geolocation) setGeolocationValue(mapCenter);
    
      // We add markers and modals to locations
      if (locations.length > 0) {
        locations.map(location => {
          let marker;
          const selectedLocation =
            activeLocation && activeLocation.name === location.name;

          if (selectedLocation) {
            const modal = modalInit(mapsObj, location);
            marker = markerInit(map, mapsObj, location);
            modal.open(map, marker);
          } else {
            marker = markerInit(map, mapsObj, location, markerBlue);
          }
          marker.addListener('click', () => updateView(location));
        });
      }
    };
    asyncWrap();
  }, [activeLocation, locations.length, geolocation]);

  return <StyledMap id="map" />;
};

function mapStateToProps(state) {
  return {
    mapsObj: state.maps.mapsObj,
    geolocation: state.maps.geolocation,
    locations: state.locations.locations,
    activeLocation: state.activeLocation,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      mapsLoading,
      locationLoads,
      setActive,
      setGeolocationValue
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Map);

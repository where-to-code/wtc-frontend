import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyledMap } from './componentStyles/MapStyles';
import { mapsLoading, locationLoads, setActive } from '../redux/actionCreators';
import { modalInit, markerInit, mapInit, position } from './helpers/mapHelpers'
import markerMan from '../assets/icons8-street-view-40.png'
import markerBlue from '../assets/icons8-marker-40.png'

const Map = props => {
  const {
    mapsObj,
    geolocation,
    mapsLoading,
    locations,
    singleLocCoord,
    setActive,
    activeLocation } = props;

  // Set the default position to Trafalgar Square, London
  let defaultPos = { lat: 51.504831314, lng: -0.123499506 };
  // if we receive coordinates from Single Location component we set the center with them
  if (singleLocCoord) defaultPos = singleLocCoord;

  useEffect(  () => {
    // we need to use a wrapper tp use async functions inside UseEffect
    const asyncWrap = async () => {
      const pos = await position(defaultPos)
      let map;
      // If we already got the mapObj we build the map
      if (mapsObj && singleLocCoord) map = mapInit(mapsObj, singleLocCoord)
      else if (mapsObj)  map = mapInit(mapsObj, defaultPos, markerMan);
      //Or we fetch it from google API before
      else mapsLoading(pos);
  
      // We add markers and modals to locations
      if (locations.length > 0) {
        locations.map(location => {
          let marker;
          const selectedLocation = activeLocation &&
            activeLocation.name === location.name;
  
          if (selectedLocation) {
            const modal = modalInit(mapsObj, location);
            marker = markerInit(map, mapsObj, location);
            modal.open(map, marker);
          } else {
            marker = markerInit(map, mapsObj, location, markerBlue)
          }
          marker.addListener('click', () => setActive(location));
        });
      }
    } 
    asyncWrap()
  }, [activeLocation, locations.length, geolocation]);

  return <StyledMap id="map" />;
}
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
    },
    dispatch
  );
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

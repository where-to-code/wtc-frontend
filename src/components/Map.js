import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapsLoading, locationLoads } from '../redux/actionCreators';

function Map(props) {
  const { maps, mapsLoading, locations, locationLoads } = props;

  let newMap;
  const defaultPos = { lat: 51.508056, lng: -0.128056, }
  const mapDefaultView = () => {
    newMap = new maps.mapsObj.Map(document.getElementById('map'), {
      zoom: 15,
      center: defaultPos
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        newMap.setCenter(pos);
        setCenterToUserLocation(true, newMap);
      });
    } else {
      // Browser doesn't support Geolocation
      setCenterToUserLocation(false, newMap);
    }
  };

  const setCenterToUserLocation = (browserHasGeolocation, newMap) => {
    // add the marker to the center 
    new maps.mapsObj.Marker({
      map: newMap,
      position: newMap.getCenter()
    });
    if (!browserHasGeolocation) {
      console.log("this browser doesn't support geolocation or you didn't allow it. Map is centered to default position");
    } 
  };

  useEffect(() => {
    // This wiil needs to be refactored or modified when search is present
    // If geolocation is present we load the locations around it
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        locationLoads(pos)
      })
    } else {
      locationLoads(defaultPos)
    }
    // Then we build the map
    if (maps.mapsObj) {
      mapDefaultView();
    } else {
      mapsLoading();
    }
    // Finally we add the markers of the locations on the map
    if (locations.locations.length > 0) {
      locations.locations.map(location => 
        new maps.mapsObj.Marker({
        map: newMap,
        position: {
          lat: parseFloat(location.latitude),
          lng: parseFloat(location.longitude) 
        }
      }))
    }
   
  }, [maps.mapsObj, locations.locations.length]);
  return (
    <div className="App">
      <div className="map-container" id="map" />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    maps: state.maps,
    locations: state.locations
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    mapsLoading,
    locationLoads
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
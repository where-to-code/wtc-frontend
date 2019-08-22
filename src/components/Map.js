import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapsLoading, locationLoads } from '../redux/actionCreators';

function Map(props) {
  const { maps, mapsLoading, locations, locationLoads } = props;

  let newMap;

  const mapDefaultView = () => {
    newMap = new maps.mapsObj.Map(document.getElementById('map'), {
      zoom: 15,
      center: { lat: 6.553909, lng: 3.3663045 }
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
    // add the marker to the center and markers for every location in state
    if (browserHasGeolocation) {
      new maps.mapsObj.Marker({
        map: newMap,
        position: newMap.getCenter()
      });
    } else {
      console.log("this browser doesn't support geolocation or you didn't allow it");
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
    };
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
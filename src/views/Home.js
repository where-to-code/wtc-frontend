import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mapsLoading } from '../redux/actionCreators';

function Home(props) {
  const { maps, mapsLoading } = props;

  useEffect(() => {
    if (maps.mapsObj) {
      mapDefaultView();
    } else {
      mapsLoading();
    }
  }, [maps.mapsObj]);

  const mapDefaultView = async () => {
    const newMap = new maps.mapsObj.Map(document.getElementById('map'), {
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
    // add the marker to the center
    if (browserHasGeolocation) {
      new maps.mapsObj.Marker({
        map: newMap,
        position: newMap.getCenter()
      });
    } else {
      console.log("this browser doesn't support geolocation or you refused access to it");
    }
  };

  return (
    <div className="App">
      <div className="map-container" id="map" />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    maps: state.maps
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    mapsLoading,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

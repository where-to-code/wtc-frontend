import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { mapsLoading } from '../redux/actionCreators';
import { StyledMap } from './componentStyles/SearchPageStyles';

function Map(props) {
  const { maps, mapsLoading } = props;

  const mapDefaultView = async () => {
    const newMap = new maps.mapsObj.Map(document.getElementById('map'), {
      zoom: 15,
      center: { lat: 6.553909, lng: 3.3663045 }
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
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
      console.log('error');
    }
  };

  useEffect(() => {
    if (maps.mapsObj) {
      mapDefaultView();
    } else {
      mapsLoading();
    }
  }, [maps.mapsObj]);
  return (
    
  <StyledMap id="map" />
  );
}

function mapStateToProps(state) {
  return {
    maps: state.maps
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      mapsLoading
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);

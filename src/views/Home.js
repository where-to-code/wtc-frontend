import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// import { loadMapApi } from '../redux/actionCreators';
function Home() {
  const [googleMap, setGoogleMap] = useState(null);
  const mapDefaultView = async () => {
    const newMap = new googleMap.Map(document.getElementById('map'), {
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
      new googleMap.Marker({
        map: newMap,
        position: newMap.getCenter()
      });
    } else {
      console.log('error');
    }
  };

  const loadMap = () => {
    const mapPromise = loadMapApi();
    Promise.all([mapPromise]).then(value => {
      setGoogleMap(value[0].maps);
    });
  };

  const loadMapApi = () => {
    // #1 the component call this function
    // #2 it will set-up the script on the body
    // and trigger the API call to the URL with the params and API key
    // the params take a callback function set at global leve (window.initGoogleMapPromise) that is
    // invoked once the API is loaded as a global object attached to
    // window
    // #3 the callback resolve the promise with window.google (previously set in the API call)
    // #4 we clear the callback function from window
    // #5 return the resolved promise (maps API) to the calling component

    return new Promise((resolve, reject) => {
      window.initGoogleMapPromise = () => {
        resolve(window.google);
        delete window.initGoogleMapPromise;
      };
      const script = document.createElement('script');
      const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
      script.async = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGoogleMapPromise`;
      document.body.appendChild(script);
    });
  };
  useEffect(() => {
    if (googleMap) {
      mapDefaultView();
    } else {
      loadMap();
    }
  });
  return (
    <div className="App">
      <div className="map-container" id="map" />
    </div>
  );
}

const mapStateToProps = () => {
  return {};
};
export default connect(
  mapStateToProps,
  {}
)(Home);

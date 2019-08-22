<<<<<<< HEAD
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { mapsLoading } from '../redux/actionCreators';

function Home(props) {
  const { maps, mapsLoading, locations } = props;

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
      center: { lat: 6.553909, lng: 3.3663045 },
      
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
      console.log(locations.locations)
      const mapWithMarkers = locations.locations.map(location => new maps.mapsObj.Marker({
        map: newMap,
        position: {
          lat: location.latitude,
          lng: location.longitude
        }
      }))
      new maps.mapsObj.Marker({
        map: newMap,
        position: newMap.getCenter()
      });
    } else {
      console.log("this browser doesn't support geolocation or you refused access to it");
    }
  };
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHome } from './HomeStyles';
import logo from '../assets/logo.png';
>>>>>>> 78a032686a029229bccda0023293f22448151623

const Home = () => {
  return (
    <StyledHome>
        <header>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="auth">
            <button>Sign Up</button>
            <button>Login</button>
          </div>
        </header>
      <div className="container">
        <h2>Find the best places to code</h2>
        <form type="submit">
          <input type="text" placeholder="Search" />
          <input type="submit" value="" />
        </form>
        <Link to="/locations"><button>Find places near you</button></Link>
      </div>
    </StyledHome>
  );
<<<<<<< HEAD
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
  }, dispatch);
}
=======
};
>>>>>>> 78a032686a029229bccda0023293f22448151623

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHome } from './ViewStyles/HomeStyles';
import Header from '../components/Header';
import { mapPromise } from '../redux/helpers';

const Home = () => {
  Promise.resolve(mapPromise).then(() => {
    /*global google*/ // To disable any eslint 'google not defined' errors
    const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('mapSuggestions'),
    );

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();

      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();
      console.log(latitude, longitude);
    });
  });

  return (
    <StyledHome>
      <Header landing={true} />
      <div className="container">
        <h2>Find the best places to code</h2>
        <form type="submit">
          <input type="text" placeholder="Search" id="mapSuggestions" />
          <input type="submit" value="" />
        </form>
        <Link to="/locations">
          <button>Find places near you</button>
        </Link>
      </div>
    </StyledHome>
  );
};

export default Home;

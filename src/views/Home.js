import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHome } from './ViewStyles/HomeStyles';
import Header from '../components/Header';

const Home = (props) => {
  return (
    <StyledHome>
      <Header landing={true}/>
      <div className="container">
        <h2>Find the best places to code</h2>
        <form type="submit">
          <input type="text" placeholder="Search" />
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

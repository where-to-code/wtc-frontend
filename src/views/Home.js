import React from 'react';
import { StyledHome } from './HomeStyles';
const Home = () => {
  return (
    <StyledHome>
      <div>
        <h2>Find the best places to code</h2>
        <input type='text' placeholder='Search' />
        <button>Find places near you</button>
      </div>
    </StyledHome>
  );
};

export default Home;

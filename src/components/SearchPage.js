import React from 'react';
import Map from './Map';
import Header from './Header';
import { StyledSearch } from './componentStyles/SearchPageStyles';
const SearchPage = () => {
  return (
    <div>
      <Header />
      <StyledSearch>
        <Map />
      </StyledSearch>
    </div>
  );
};

export default SearchPage;

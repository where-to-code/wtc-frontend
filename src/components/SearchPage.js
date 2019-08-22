import React from 'react';
import Map from './Map';
import Header from './Header';
import { StyledSearch } from './componentStyles/SearchPageStyles';
import FilterPane from './FilterPane';
const SearchPage = () => {
  return (
    <div>
      <Header />
      <StyledSearch>
        <FilterPane />
        <Map />
      </StyledSearch>
    </div>
  );
};

export default SearchPage;

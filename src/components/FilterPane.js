import React from 'react';
import { FilterPaneStyle } from './componentStyles/SearchPageStyles';

const FilterPane = () => {
  return (
    <FilterPaneStyle>
      <div className="filterTitle">
        <h4>Search Filters</h4>
      </div>
      <div className="check">
        <div className="content">
          <input type="checkbox" name="option1" value="Quiet" />
          <div>Quiet</div>
        </div>
      </div>
      <div className="check">
        <div className="content">
          <input type="checkbox" name="option3" value="wifi" />
          <div>Fast Wifi</div>
        </div>
      </div>
      <div className="check">
        <div className="content">
          <input type="checkbox" name="option3" value="public" />
          <div>Public Space</div>
        </div>
      </div>
    </FilterPaneStyle>
  );
};

export default FilterPane;

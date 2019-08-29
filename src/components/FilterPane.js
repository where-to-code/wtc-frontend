import React from 'react';
import { FilterPaneStyle } from './componentStyles/FilterPaneStyles';

const FilterPane = props => {
  return (
    <FilterPaneStyle show={props.toggle}>
      <div className="filter" onClick={props.show}>
        Filter
      </div>
      <div className="pane">
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
      </div>
    </FilterPaneStyle>
  );
};

export default FilterPane;

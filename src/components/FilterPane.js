import React from 'react';
import { FilterPaneStyle } from './componentStyles/FilterPaneStyles';

const FilterPane = props => {
  const { setNewLocations } = props;

  return (
    <FilterPaneStyle show={true}>
      <div className="filter">Filter</div>
      <div className="pane">
        <div className="check">
          <div className="content">
            <input
              type="checkbox"
              name="option1"
              value="Quiet"
              onChange={() => setNewLocations('quiet')}
            />
            <div>Quiet</div>
          </div>
        </div>
        <div className="check">
          <div className="content">
            <input
              type="checkbox"
              name="option3"
              value="Fast Wifi"
              onChange={() => setNewLocations('wifi')}
            />
            <div>Fast Wifi</div>
          </div>
        </div>
        <div className="check">
          <div className="content">
            <input
              type="checkbox"
              name="option3"
              value="Accessibility"
              onChange={() => setNewLocations('accessibility')}
            />
            <div>Accessibility</div>
          </div>
        </div>
        <div className="check">
          <div className="content">
            <input
              type="checkbox"
              name="option3"
              value="Community"
              onChange={() => setNewLocations('community')}
            />
            <div>Community</div>
          </div>
        </div>
      </div>
    </FilterPaneStyle>
  );
};

export default FilterPane;

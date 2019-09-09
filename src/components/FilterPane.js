import React, { useState } from 'react';
import { FilterPaneStyle } from './componentStyles/FilterPaneStyles';
import Checkbox from './Checkbox';

const FilterPane = props => {
  const { setNewLocations } = props;
  const [filter, setFilter] = useState({
    quiet: false,
    wifi: false,
    accessibility: false,
    community: false
  });

  const checkboxes = ['quiet', 'wifi', 'accessibility', 'community'];
  return (
    <FilterPaneStyle show={true}>
      <div className="filter">Filter</div>
      <div className="pane">
        {checkboxes.map(check => (
          <Checkbox
            name={check}
            key={check}
            fiterCondition={setFilter}
            filter={filter}
            setNewLocations={setNewLocations}
          />
        ))}
      </div>
    </FilterPaneStyle>
  );
};

export default FilterPane;

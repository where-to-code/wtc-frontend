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
    <FilterPaneStyle>
      <div className="filter">Filter locations by preferences</div>
      <div className="pane">
        {checkboxes.map(check => (
          <Checkbox
            key={check}
            name={check}
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

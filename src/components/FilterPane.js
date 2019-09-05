import React from 'react';
import { FilterPaneStyle } from './componentStyles/FilterPaneStyles';

const FilterPane = props => {
  const { setChoice, choices } = props;
  
  return (
    <FilterPaneStyle show={true}>
      <div className="filter">
        Filter
      </div>
      <div className="pane">
        <div className="check">
          <div className="content">
            <input
              type="checkbox"
              name="option1"
              value="Quiet"
              onChange={e => setChoice({ ...choices, quiet: !choices.quiet })}
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
              onChange={e => setChoice({ ...choices, wifi: !choices.wifi })}
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
              onChange={e =>
                setChoice({ ...choices, accessibility: !choices.accessibility })
              }
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
              onChange={e => setChoice({ ...choices, community: !choices.community })}
            />
            <div>Community</div>
          </div>
        </div>
      </div>
    </FilterPaneStyle>
  );
};

export default FilterPane;

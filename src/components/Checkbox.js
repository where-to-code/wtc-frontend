import React, { useState, useEffect } from 'react';
import { StyledCheckbox } from './componentStyles/CheckboxStyles';

const Checkbox = props => {
  const { name, setNewLocations, fiterCondition, filter } = props;

  const [checked, setCheck] = useState(false);

  const handleChange = event => {
    setCheck(event.target.checked);
    fiterCondition({
      ...filter,
      [event.target.name]: event.target.checked
    });
  };

  const capitalize = letter => {
    return letter[0].toUpperCase() + letter.slice(1);
  };

  useEffect(() => {
    setNewLocations(filter);
    // eslint-disable-next-line
  }, [filter]);

  return (
    <StyledCheckbox>
      {capitalize(name)}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={e => handleChange(e)}
      />
      <span></span>
    </StyledCheckbox>
  );
};

export default Checkbox;

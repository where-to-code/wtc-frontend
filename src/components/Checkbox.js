import React, { useState, useEffect } from 'react';

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
  }, [filter]);

  return (
    <div className="check">
      <div className="content">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={e => handleChange(e)}
        />
        <div>{capitalize(name)}</div>
      </div>
    </div>
  );
};

export default Checkbox;

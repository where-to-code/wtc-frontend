import React, { useState } from 'react';
import UpdateDescriptionStyle from './componentStyles/updateDescriptionStyles';

export default ({ editing, setEditing, currentDescription }) => {
  const [description, updateDescription] = useState(currentDescription);

  const handleChange = e => {
    updateDescription(e.target.value);
  };

  const handleCancel = e => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <UpdateDescriptionStyle editing={editing}>
      <form>
        <textarea
          placeholder="Enter new description..."
          cols="30"
          rows="5"
          value={description}
          onChange={handleChange}
        />
        <div>
          <button onClick={handleCancel}>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </UpdateDescriptionStyle>
  );
};

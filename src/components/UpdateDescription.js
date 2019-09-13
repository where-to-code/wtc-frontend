import React from 'react';
import UpdateDescriptionStyle from './componentStyles/updateDescriptionStyles';

export default ({ editing, setEditing }) => {
  const handleCancel = e => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <UpdateDescriptionStyle editing={editing}>
      <form>
        <textarea placeholder="Enter new description..." cols="30" rows="5" />
        <div>
          <button onClick={handleCancel}>Cancel</button>
          <button>Save</button>
        </div>
      </form>
    </UpdateDescriptionStyle>
  );
};

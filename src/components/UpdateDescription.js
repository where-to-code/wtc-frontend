import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { singleLocSuccess } from '../redux/actionCreators';
import UpdateDescriptionStyle from './componentStyles/updateDescriptionStyles';

const UpdateDescription = ({
  editing,
  setEditing,
  currentDescription,
  locationId,
  singleLocSuccess,
}) => {
  const [description, updateDescription] = useState(currentDescription);

  const handleChange = e => {
    updateDescription(e.target.value);
  };

  const handleCancel = e => {
    e.preventDefault();
    setEditing(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    axios
      .put(
        `https://where2code.herokuapp.com/api/locations/${locationId}`,
        {
          description,
        },
        {
          withCredentials: true,
        },
      )
      .then(res => {
        singleLocSuccess(res.data.data[0]);
        setEditing(false);
      });
  };

  return (
    <UpdateDescriptionStyle editing={editing}>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter new description..."
          cols="30"
          rows="5"
          value={description}
          onChange={handleChange}
        />
        <div>
          <button onClick={handleCancel}>Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </UpdateDescriptionStyle>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      singleLocSuccess,
    },
    dispatch,
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(UpdateDescription);

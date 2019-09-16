import React, { useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';

import { singleLocSuccess, fetchSingleLocation } from '../redux/actionCreators/singleLocationActionCreators';
import UpdateDescriptionStyle from './componentStyles/updateDescriptionStyles';

const UpdateDescription = ({
  editing,
  setEditing,
  currentDescription,
  locationId,
  fetchSingleLocation
}) => {
  const [description, updateDescription] = useState(currentDescription);
  const [updating, setUpdating] = useState(null);
  const [updateError, setUpdateError] = useState(false);

  const handleChange = e => {
    updateDescription(e.target.value);
    setUpdateError(false);
  };

  const handleCancel = e => {
    e.preventDefault();
    setEditing(false);
    setUpdating(false);
    setUpdateError(false);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (description.trim().length === 0) return;

    setUpdating(true);

    axios
      .put(
        `https://where2code.herokuapp.com/api/locations/${locationId}`,
        {
          description
        },
        {
          withCredentials: true
        }
      )
      .then(res => {
        setUpdating(false);
        setEditing(false);
        fetchSingleLocation(locationId);
      })
      .catch(() => {
        setUpdateError(true);
      });
  };

  if (updating)
    return (
      <UpdateDescriptionStyle editing={editing}>
        <section>
          {updateError ? (
            <div>
              <h1>You have to be logged in to update locations</h1>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
              <Loader type="Oval" color="#56c1cb" height={40} width={40} />
            )}
        </section>
      </UpdateDescriptionStyle>
    );

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
      fetchSingleLocation
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(UpdateDescription);

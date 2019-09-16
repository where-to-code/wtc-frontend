import * as types from '../actionTypes';
import axios from 'axios';

const url = 'https://where2code.herokuapp.com/api';

export function addNewLocationLoad() {
  return {
    type: types.ADD_NEW_LOCATION_LOAD
  };
}

export function addNewLocationSuccess() {
  return {
    type: types.ADD_NEW_LOCATION_SUCCESS,
  };
}

export function addNewLocationFail(error) {
  return {
    type: types.ADD_NEW_LOCATION_FAIL,
    payload: error
  };
}

export const addNewLocation = locationData => dispatch => {
  dispatch(addNewLocationLoad());
  return axios
    .post(`${url}/locations`, locationData, {
      withCredentials: true
    })
    .then(res => {
      dispatch(addNewLocationSuccess());
      return res;
    })
    .catch(err => {
      const errorValue = err.response ? err.response.data.error : err.message;
      dispatch(addNewLocationFail(errorValue));
      return err;
    });
};

export const clearNewLocation = () => ({
  type: types.CLEAR_NEW_LOCATION
})

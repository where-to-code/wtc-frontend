import * as types from '../actionTypes';

export const setActive = location => ({
  type: types.SET_ACTIVE,
  payload: location,
});

export const clearActive = () => ({
  type: types.CLEAR_ACTIVE,
});
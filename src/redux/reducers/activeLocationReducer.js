import * as types from '../actionTypes';

export const activeLocationReducer = (state = null, action) => {
    switch (action.type) {
      case types.SET_ACTIVE:
        return action.payload;
      case types.CLEAR_ACTIVE:
        return null;
      default:
        return state;
    }
  };
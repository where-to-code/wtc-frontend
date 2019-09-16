import * as types from '../actionTypes';

const newLocation = {
  location: null,
  loading: false,
  isAdded: false,
  error: ''
};

export const addLocationReducer = (state = newLocation, action) => {
  switch (action.type) {
    case types.ADD_NEW_LOCATION_LOAD:
      return {
        ...state,
        loading: true,
      };

    case types.ADD_NEW_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        location: action.payload
      };

    case types.ADD_NEW_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.CLEAR_NEW_LOCATION:
      return { ...state, isAdded: false }
    default:
      return state;
  }
};

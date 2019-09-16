import * as types from '../actionTypes';

export const locationsReducer = (
  state = {
    loadingLocation: false,
    locations: [],
    allLocations: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case types.LOADING_LOCATIONS:
      return { ...state, loadingLocation: true };
    case types.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        error: null,
        loadingLocation: false,
        locations: action.payload
      };
    case types.ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        error: null,
        loadingLocation: false,
        allLocations: action.payload,
        locations: action.payload
      };
    case types.FETCH_LOCATIONS_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    case types.CLEAR_LOCATIONS:
      return { ...state, locations: [] };
    default:
      return state;
  }
};
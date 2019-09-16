import * as types from '../actionTypes';

export const singleLocationReducer = (
  state = { loadingSingleLoc: false, location: null, error: null },
  action
) => {
  switch (action.type) {
    case types.LOADING_SINGLE_LOCATION:
      return { ...state, loadingSingleLoc: true };
    case types.FETCH_SINGLE_LOCATIONS_SUCCESS:
      return { ...state, loadingSingleLoc: false, location: action.payload };
    case types.FETCH_SINGLE_LOCATIONS_FAILURE:
      return { ...state, loadingSingleLoc: false, error: action.payload };
    default:
      return state;
  }
};
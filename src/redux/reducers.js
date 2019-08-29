import * as types from './actionTypes';

export const locationReducer = (
  state = {
    loadingLocation: false,
    locations: [],
    error: null,
  },
  action
) => {
  switch (action.type) {
    case types.LOADING_LOCATIONS:
      return { ...state, loadingLocation: true };
    case types.FETCH_LOCATIONS_SUCCESS:
      return { ...state, loadingLocation: false, locations: action.payload };
    case types.FETCH_LOCATIONS_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    default:
      return state;
  }
};

export const singleLocaReducer = (
  state = { loadingSingleLoc: false, location: null, error: null },
  action
) => {
  switch (action.type) {
    // Single location data
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

export const mapsReducer = (
  state = { loadingMaps: false, mapsObj: null, error: null, geolocation: null },
  action
) => {
  console.log(action.payload)
  switch (action.type) {
    case types.LOADING_MAP_API:
      return { ...state, loadingMaps: true };
    case types.FETCH_MAP_API_SUCCESS:
      return {
        ...state,
        loadingLocation: false,
        mapsObj: action.payload.mapsObj,
        geolocation: action.payload.geolocation
      };
    case types.FETCH_MAP_API_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    default:
      return state;
  }
};
export const activeLocation = (state = null, action) => {
  switch (action.type) {
    case types.SET_ACTIVE:
      return action.payload;
    default:
      return state;
  }
}
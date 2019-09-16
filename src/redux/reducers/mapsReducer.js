import * as types from '../actionTypes';

export const mapsReducer = (
    state = {
      loadingMaps: false,
      error: null,
      geolocation: null,
      isGeolocated: false
    },
    action
  ) => {
    switch (action.type) {
      case types.LOADING_MAP_API:
        return { ...state, loadingMaps: true };
      case types.FETCH_MAP_API_FAILURE:
        return { ...state, loadingLocation: false, error: action.payload };
      case types.SET_GEOLOCATION_TRUE:
        return { ...state, isGeolocated: true };
      case types.SET_GEOLOCATION_FALSE:
        return { ...state, isGeolocated: false };
      case types.SET_GEOLOCATION_VALUE:
        return { ...state, geolocation: action.payload };
      default:
        return state;
    }
  };
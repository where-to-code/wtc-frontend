import * as types from '../actionTypes'
import axios from 'axios';

const url = 'https://where2code.herokuapp.com/api';

export const locationSuccess = locationList => ({
    type: types.FETCH_LOCATIONS_SUCCESS,
    payload: locationList.data,
  });
  
  export const locationFailure = error => ({
    type: types.FETCH_LOCATIONS_FAILURE,
    payload: error,
  });
  
  export const locationLoads = currentLocation => async dispatch => {
    dispatch({ type: types.LOADING_LOCATIONS });
    try {
      const locationsInfo = await axios.get(
        `${url}/locations?lat=${currentLocation.lat}&long=${currentLocation.lng}`,
      );
      dispatch(locationSuccess(locationsInfo.data));
    } catch (error) {
      const errorValue = error.response
        ? error.response.data.message
        : error.message;
      dispatch(locationFailure(errorValue));
    }
  };
  
  export const filterLocations = locations => async dispatch => {
    try {
      return dispatch(locationSuccess(locations));
    } catch (error) {
      return dispatch(locationFailure(error));
    }
  };
  
  export const clearLocations = () => ({
    type: types.CLEAR_LOCATIONS,
  });
  
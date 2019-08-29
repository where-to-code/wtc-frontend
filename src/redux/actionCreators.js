import * as types from './actionTypes';
import axios from 'axios';

const url = 'https://where2code.herokuapp.com/api';

export const locationSuccess = locationList => ({
  type: types.FETCH_LOCATIONS_SUCCESS,
  payload: locationList.data
});

export const locationFailure = error => ({
  type: types.FETCH_LOCATIONS_FAILURE,
  payload: error
});

export const locationLoads = currentLocation => async dispatch => {
  dispatch({ type: types.LOADING_LOCATIONS });
  try {
    const locationsInfo = await axios.get(
      `${url}/locations?lat=${currentLocation.lat}&long=${currentLocation.lng}`
    );
    dispatch(locationSuccess(locationsInfo.data));
  } catch (error) {
    dispatch(locationFailure(error.message));
  }
};

export const mapsSucces = (mapsObj, geolocation) => ({
  type: types.FETCH_MAP_API_SUCCESS,
  payload: { mapsObj, geolocation }
});

export const mapsFailure = error => ({
  type: types.FETCH_MAP_API_FAILURE,
  payload: error
});

export const mapsLoading = geolocation => async dispatch => {
  dispatch({ type: types.LOADING_MAP_API });
  try {
    const mapPromise = new Promise((resolve, reject) => {
      window.initGoogleMapPromise = () => {
        resolve(window.google);
        delete window.initGoogleMapPromise;
      };
      const script = document.createElement('script');
      const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
      script.async = true;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGoogleMapPromise`;
      document.body.appendChild(script);
    });
    Promise.all([mapPromise]).then(value => {
      dispatch(mapsSucces(value[0].maps, geolocation));
    });
  } catch (error) {
    dispatch(mapsFailure(error.message));
  }
};

// Actions to get Single location data
export const singleLocSuccess = locationList => ({
  type: types.FETCH_SINGLE_LOCATIONS_SUCCESS,
  payload: locationList
});

export const singleLocFailure = error => ({
  type: types.FETCH_SINGLE_LOCATIONS_FAILURE,
  payload: error
});

export const fetchSingleLocation = locId => async dispatch => {
  dispatch({ type: types.LOADING_SINGLE_LOCATION });
  try {
    const locationInfo = await axios.get(`${url}/locations/${locId}`);
    dispatch(singleLocSuccess(locationInfo.data.data));
  } catch (error) {
    dispatch(singleLocFailure(error.message));
  }
};

export const setActive = location => ({
  type: types.SET_ACTIVE,
  payload: location
})

export const setGeolocationTrue = () => ({
  type: types.SET_GEOLOCATION_TRUE
})

export const setGeolocationFalse = () => ({
  type: types.SET_GEOLOCATION_FALSE
})



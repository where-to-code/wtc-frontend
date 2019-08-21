import * as types from './actionTypes';
import axios from 'axios';
let url;
export const locationSuccess = locationList => ({
  type: types.FETCH_LOCATIONS_SUCCESS,
  payload: locationList
});

export const locationFailure = error => ({
  type: types.FETCH_LOCATIONS_FAILURE,
  payload: error
});

export const locationLoads = () => async dispatch => {
  dispatch({ type: types.LOADING_LOCATIONS });
  try {
    const locationsInfo = await axios.get(`${url}/locations`);
    dispatch(locationSuccess(locationsInfo.data));
  } catch (error) {
    dispatch(locationFailure(error.message));
  }
};

// export const loadMapApi = () => async dispatch => {
//   // #1 the component call this function
//   // #2 it will set-up the script on the body
//   // and trigger the API call to the URL with the params and API key
//   // the params take a callback function set at global leve (window.initGoogleMapPromise) that is
//   // invoked once the API is loaded as a global object attached to
//   // window
//   // #3 the callback resolve the promise with window.google (previously set in the API call)
//   // #4 we clear the callback function from window
//   // #5 return the resolved promise (maps API) to the calling component

//   return new Promise((resolve, reject) => {
//     window.initGoogleMapPromise = () => {
//       resolve(window.google);
//       delete window.initGoogleMapPromise;
//     };
//     const script = document.createElement('script');
//     const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
//     script.async = true;
//     script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&callback=initGoogleMapPromise`;
//     document.body.appendChild(script);
//   });
// };

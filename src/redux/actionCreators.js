import * as types from './actionTypes';
import axios from 'axios';

const url = 'https://where2code.herokuapp.com/api/';


export const locationSuccess = locationList => ({
  type: types.FETCH_LOCATIONS_SUCCESS,
  payload: locationList.info
});

export const locationFailure = error => ({
  type: types.FETCH_LOCATIONS_FAILURE,
  payload: error
});

export const locationLoads = currentLocation => async dispatch => {
  dispatch({ type: types.LOADING_LOCATIONS });
  try {
    const locationsInfo = await axios.get(`${url}/locations?lat=${currentLocation.lat}&long=${currentLocation.lng}`);
    dispatch(locationSuccess(locationsInfo.data));
  } catch (error) {
    dispatch(locationFailure(error.message));
  }
};

export const mapsSucces = mapsObj => ({
  type: types.FETCH_MAP_API_SUCCESS,
  payload: mapsObj,
})

export const mapsFailure = error => ({
  type: types.FETCH_MAP_API_FAILURE,
  payload: error,
})

export const mapsLoading = () => async dispatch => {
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
      dispatch(mapsSucces((value[0].maps)));
    });
  } catch (error) {
    dispatch(mapsFailure(error.message));
  }
}

// Actions to get Single location data
export const singleLocSuccess = locationList => ({
  type: types.FETCH_SINGLE_LOCATIONS_SUCCESS,
  payload: locationList
});

export const singleLocFailure = error => ({
  type: types.FETCH_SINGLE_LOCATIONS_FAILURE,
  payload: error
});

export const fetchSingleLocation = (locId) => async dispatch => {
  dispatch({ type: types.LOADING_SINGLE_LOCATION });
  try {
    //const locationInfo = await axios.get(`${url}/api/locations/${locId}`);
    const locationInfo = {
      data: singLocMocData,
    };
    dispatch(singleLocSuccess(singLocMocData.data));
  } catch (error) {
    dispatch(singleLocFailure(error.message));
  }
};

const singLocMocData = {
  "status": 200,
  "data": {
      "id": 244,
      "name": "Kenaston Indigo",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "image_url": "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Feustaciahuen%2Ffiles%2F2017%2F03%2FNeuehouse-3-1200x675.jpg",
      "address": "1590 Kenaston Blvd, 110, Winnipeg, MB",
      "longitude": "-97.2",
      "latitude": "49.82",
      "created_at": "2019-08-21T11:29:28.714Z",
      "averageRating": null,
      "reviews": [
        {
          quietness: 2,
          wifi_speed: 1,
          close_late: 4,
          community: 5,
          accessibility: 5,
          description: 'Service was awesome',
          user_id: 1,
        },
        {
          quietness: 3,
          wifi_speed: 4,
          close_late: 2,
          community: 1,
          accessibility: 1,
          description: 'Service was meh',
          user_id: 2,
        },
        {
          quietness: 5,
          wifi_speed: 5,
          close_late: 1,
          community: 3,
          accessibility: 2,
          description: 'was kinda over there',
          user_id: 3,
        },
        {
          quietness: 1,
          wifi_speed: 1,
          close_late: 2,
          community: 1,
          accessibility: 3,
          description: 'It definitely could have been better',
          user_id: 4,
        },
        {
          quietness: 3,
          wifi_speed: 4,
          close_late: 4,
          community: 5,
          accessibility: 5,
          description: 'Great, great place to code!',
          user_id: 5,
        },
      ]
  }
}


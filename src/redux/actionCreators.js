import * as types from './actionTypes';
import axios from 'axios';
import { mapPromise } from './helpers';

const url = 'https://where2code.herokuapp.com/api';
const locations = {
  status: 200,
  data: [
    {
      name: 'SPAR Ilupeju',
      description: 'A spar to code in.',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dDHB_nliR3160ubZgp6J9A3nfPUsHMXcoVGwgb4x3oBzgGNU',
      address: '31, Ilupeju Mall, 33 Town Planning Way, Ilupeju 100252, Lagos',
      latitude: '6.553909',
      longitude: '3.3663045',
      avg_quietness: 2,
      avg_wifi_speed: 4,
      avg_accessibility: 3,
      avg_community: 4
    },
    {
      name: 'Domino"s Pizza',
      description: 'code and pizza.',
      image_url:
        'https://purewows3.imgix.net/images/articles/2017_01/bespoke_coworking_spaces_san_francisco.png?auto=format,compress&cs=strip',
      address: '340/344 Ikorodu Rd, Anthony, Lagos',
      latitude: '6.5663896',
      longitude: '3.3662124',
      avg_quietness: 3,
      avg_wifi_speed: 2,
      avg_accessibility: 5,
      avg_community: 1
    },
    {
      name: 'Babacorvee Plaza',
      description: 'A cool spot to code in.',
      image_url:
        'https://www.rent24.com/wp-content/uploads/coworking-space-berlin-schoeneberg.jpg',
      address: 'Babacorvee Plaza, Onipanu, 55 Shipeolu St, Somolu, Lagos',
      latitude: '6.5400607',
      longitude: '3.3647819',
      avg_quietness: 4,
      avg_wifi_speed: 3,
      avg_accessibility: 2,
      avg_community: 3
    },
    {
      name: 'Chicken Republic',
      description: 'A fast food for work.',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLqR1M8Oq2awl4d6DrzDOeN90CZCIHZA6M5YI6GIg77mQgH4AwQ',
      address: '10 Ikorodu Rd, Yaba, Lagos',
      latitude: '6.517845',
      longitude: '3.3667155',
      avg_quietness: 5,
      avg_wifi_speed: 2,
      avg_accessibility: 5,
      avg_community: 2
    },
    {
      name: 'Vintage Suites',
      description: 'Work away from this place',
      image_url:
        'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Feustaciahuen%2Ffiles%2F2017%2F03%2FNeuehouse-3-1200x675.jpg',
      address: '15c Akinhanmi St, Surulere, Lagos',
      latitude: '6.5152371',
      longitude: '3.3629375',
      avg_quietness: 3,
      avg_wifi_speed: 5,
      avg_accessibility: 1,
      avg_community: 4
    },
    {
      name: 'Swisscottage Suites',
      description: 'Work away from this place',
      image_url:
        'https://purewows3.imgix.net/images/articles/2017_01/bespoke_coworking_spaces_san_francisco.png?auto=format,compress&cs=strip',
      address: '18 Sunday Adigun St, Oregun Ikeja',
      latitude: '6.6117669',
      longitude: '3.3592648',
      avg_quietness: 5,
      avg_wifi_speed: 4,
      avg_accessibility: 2,
      avg_community: 1
    },
    {
      name: 'Lagos State Digital Village',
      description: 'Work away from this place',
      image_url:
        'http://thespaces.com/wp-content/uploads/2017/02/Primary-Co-Working-NYC.jpg',
      address: 'Oregun, Ikeja',
      latitude: '6.6117669',
      longitude: '3.3592648',
      avg_quietness: 4,
      avg_wifi_speed: 2,
      avg_accessibility: 5,
      avg_community: 5
    },
    {
      name: 'Apex B Shopping Mall/Boluke Pharmacy',
      description: 'Work away from this place',
      image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9Gy7PX83f8LYEiwxo_rpspew0gy_AaWxI3IiSQWWEX62u7bmQqw',
      address: 'Iju Rd, Ifako Agege, Ikeja',
      latitude: '6.6238419',
      longitude: '3.323572',
      avg_quietness: 2,
      avg_wifi_speed: 3,
      avg_accessibility: 1,
      avg_community: 3
    }
  ]
};

// Auth
export function authLoad() {
  return {
    type: types.AUTH_LOAD
  };
}

export function authSuccess(user) {
  return {
    type: types.AUTH_SUCCESS,
    payload: user
  };
}

export function authFail(payload) {
  return {
    type: types.AUTH_FAILURE,
    payload: payload
  };
}

export const login = user => async dispatch => {
  dispatch(authLoad());
  try {
    const loginDetails = await axios.post(`${url}/auth/login`, user, {
      withCredentials: true
    });
    dispatch(authSuccess(loginDetails.data.data.id));
    return loginDetails;
  } catch (error) {
    dispatch(authFail(error.response.data.message));
    return error;
  }
};

export const successGitlog = userId => dispatch => {
  dispatch(authSuccess(userId));
};

export const signup = userData => async dispatch => {
  const { firstname, lastname, email, password } = userData;
  dispatch(authLoad());
  try {
    const userDetails = await axios.post(
      `${url}/auth/register`,
      {
        firstname,
        lastname,
        email,
        password
      },
      { withCredentials: true }
    );
    dispatch(authSuccess(userDetails.data.data.id));
    return userDetails;
  } catch (error) {
    dispatch(authFail(error.response.data.message));
    return error;
  }
};

// Locations
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
    dispatch(locationSuccess(locations));
  } catch (error) {
    dispatch(locationFailure(error.message));
  }
};


export const clearLocations = () => ({
  type: types.CLEAR_LOCATIONS
});

// ACTIONS FOR MAPS REDUCER
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
    // We import the Promise from helpers here
    Promise.all([mapPromise]).then(value => {
      dispatch(mapsSucces(value[0].maps, geolocation));
    });
  } catch (error) {
    dispatch(mapsFailure(error.message));
  }
};
export const setGeolocationTrue = () => ({
  type: types.SET_GEOLOCATION_TRUE
});
export const setGeolocationFalse = () => ({
  type: types.SET_GEOLOCATION_FALSE
});

// ACTIONS FOR SINGLE LOCATION REDUCER
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

// ACTIONS FOR ACTIVE LOCATION REDUCER
export const setActive = location => ({
  type: types.SET_ACTIVE,
  payload: location
});
export const clearActive = location => ({
  type: types.CLEAR_ACTIVE
});

// verify email
export function verifyEmailLoad() {
  return {
    type: types.VERIFY_EMAIL_LOAD
  };
}

export function verifyEmailSuccess(email) {
  return {
    type: types.VERIFY_EMAIL_SUCCESS,
    payload: email
  };
}

export function verifyEmailFail(payload) {
  return {
    type: types.VERIFY_EMAIL_FAILURE,
    payload: payload
  };
}

export const verifyEmail = email => dispatch => {
  dispatch(verifyEmailLoad());
  return axios
    .post(`${url}/auth/forgot`, email, {
      withCredentials: true
    })
    .then(res => {
      dispatch(verifyEmailSuccess(res.data));
      return res;
    })
    .catch(err => {
      dispatch(verifyEmailFail(err.response.data.message));
      return err;
    });
};

// password reset
export function resetPasswordLoad() {
  return {
    type: types.RESET_PASSWORD_LOAD
  };
}

export function resetPasswordSuccess(password) {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    payload: password
  };
}

export function resetPasswordFail(payload) {
  return {
    type: types.RESET_PASSWORD_FAILURE,
    payload: payload
  };
}

export const resetPassword = (password, id) => dispatch => {
  dispatch(resetPasswordLoad());
  console.log(password, id);
  return axios
    .post(
      `${url}/auth/change/${id}`,
      { password },
      {
        withCredentials: true
      }
    )
    .then(res => {
      console.log('creator', res);
      dispatch(resetPasswordSuccess(res.data));
      return res;
    })
    .catch(err => {
      dispatch(resetPasswordFail(err.response.data.message));
      return err;
    });
};

import * as types from './actionTypes';
import axios from 'axios';
import { mapPromise } from './helpers';

const url =
  process.env.NODE_ENV === 'development'
    ? 'https://where-to-code-staging.herokuapp.com/api'
    : 'https://where2code.herokuapp.com/api';


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
    })
    .then(res => {
      dispatch(authSuccess(res.data.data.id));
      return res;
    })
    .catch(err => {
      dispatch(authFail(err.response.data.message));
      return err;
    });
    dispatch(authSuccess(loginDetails.data.data.id));
    return loginDetails;
  } catch (error) {
    dispatch(authFail(error.response.data.message));
    return error;
  }
};

export const successGitlog = (userId) => dispatch =>{
  dispatch(authSuccess(userId));
};

export const signup = userData => async dispatch => {
  const { firstname, lastname, email, password } = userData;
  dispatch(authLoad());
  try {
    const userDetails = await axios.post(`${url}/auth/register`, {
      firstname,
      lastname,
      email,
      password
    }, { withCredentials: true } )
    .then(res => {
      dispatch(authSuccess(res.data.data.id));
      return res;
    })
    .catch(err => {
      console.log(err);
      dispatch(authFail(err.response.data.message));
      return err;
    });
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
    dispatch(locationSuccess(locationsInfo.data));
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
    .post('https://where-to-code-staging.herokuapp.com/api/auth/forgot', email, {
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
  console.log(password , id)
  return axios
    .post(`https://where-to-code-staging.herokuapp.com/api/auth/change/${id}`, {password}, {
      withCredentials: true
    })
    .then(res => {
      console.log('creator', res)
      dispatch(resetPasswordSuccess(res.data));
      return res;
    })
    .catch(err => {
      dispatch(resetPasswordFail(err.response.data.message));
      return err;
    });
};


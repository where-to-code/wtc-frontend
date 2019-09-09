import * as types from './actionTypes';
import axios from 'axios';
import { toast } from "react-toastify";

const url = 'https://where2code.herokuapp.com/api';

// Auth
export function authLoad() {
  return {
    type: types.AUTH_LOAD,
  };
}

export function authSuccess(user) {
  return {
    type: types.AUTH_SUCCESS,
    payload: user,
  };
}

export function authFail(payload) {
  return {
    type: types.AUTH_FAILURE,
    payload: payload,
  };
}

export const login = user => async dispatch => {
  dispatch(authLoad());
  try {
    const loginDetails = await axios
      .post(`${url}/auth/login`, user, {
        withCredentials: true,
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

export const successGitlog = userId => dispatch => {
  dispatch(authSuccess(userId));
};

export const signup = userData => async dispatch => {
  const { firstname, lastname, email, password } = userData;
  dispatch(authLoad());
  try {
    const userDetails = await axios
      .post(
        `${url}/auth/register`,
        {
          firstname,
          lastname,
          email,
          password,
        },
        { withCredentials: true },
      )
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
    dispatch(locationFailure(error.message));
  }
};

export const clearLocations = () => ({
  type: types.CLEAR_LOCATIONS,
});

export const mapsFailure = error => ({
  type: types.FETCH_MAP_API_FAILURE,
  payload: error,
});

export const mapsLoading = () => async dispatch => {
  dispatch({ type: types.LOADING_MAP_API });
};

export const setGeolocationTrue = () => ({
  type: types.SET_GEOLOCATION_TRUE,
});

export const setGeolocationFalse = () => ({
  type: types.SET_GEOLOCATION_FALSE,
});

export const setGeolocationValue = geolocation => ({
  type: types.SET_GEOLOCATION_VALUE,
  payload: geolocation,
});

// ACTIONS FOR SINGLE LOCATION REDUCER
export const singleLocSuccess = locationList => ({
  type: types.FETCH_SINGLE_LOCATIONS_SUCCESS,
  payload: locationList,
});

export const singleLocFailure = error => ({
  type: types.FETCH_SINGLE_LOCATIONS_FAILURE,
  payload: error,
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
  payload: location,
});

export const clearActive = location => ({
  type: types.CLEAR_ACTIVE,
});

// verify email
export function verifyEmailLoad() {
  return {
    type: types.VERIFY_EMAIL_LOAD,
  };
}

export function verifyEmailSuccess(email) {
  return {
    type: types.VERIFY_EMAIL_SUCCESS,
    payload: email,
  };
}

export function verifyEmailFail(payload) {
  return {
    type: types.VERIFY_EMAIL_FAILURE,
    payload: payload,
  };
}

export const verifyEmail = email => dispatch => {
  dispatch(verifyEmailLoad());
  return axios
    .post(`${url}/auth/forgot`, email, {
      withCredentials: true,
    })
    .then(res => {
      dispatch(verifyEmailSuccess(res.data));
      toast.success("successful, please check your email, thanks");
      return res;
    })
    .catch(err => {
      dispatch(verifyEmailFail(err.response.data.message));
      toast.error('account verification not successful')
      return err;
    });
};

// password reset
export function resetPasswordLoad() {
  return {
    type: types.RESET_PASSWORD_LOAD,
  };
}

export function resetPasswordSuccess(password) {
  return {
    type: types.RESET_PASSWORD_SUCCESS,
    payload: password,
  };
}

export function resetPasswordFail(payload) {
  return {
    type: types.RESET_PASSWORD_FAILURE,
    payload: payload,
  };
}

export const resetPassword = (password, id) => dispatch => {
  dispatch(resetPasswordLoad());

  return axios
    .post(
      `${url}/auth/change/${id}`,
      { password },
      {
        withCredentials: true,
      },
    )
    .then(res => {
      console.log('creator', res);
      dispatch(resetPasswordSuccess(res.data));
      toast.success("password reset successful, please login!");
      return res;
    })
    .catch(err => { console.log(err)
      dispatch(resetPasswordFail(err.response.data.message));
      toast.error('password reset not successful, try again')
      return err;
    });
};

// when user have not completed email verification yet and
// request to receive another one.
export const resendEmailVerification = email => dispatch => {
  dispatch(verifyEmailLoad());
  return axios
    .post(`${url}/auth/verify`, email, {
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

export const setNewVerificationSent = () => ({
  type: types.NEW_VERIFY_EMAIL_SENT
});

export const setPopupMessageSeen = () => ({
  type: types.POPUP_MESSAGE_SEEN
});

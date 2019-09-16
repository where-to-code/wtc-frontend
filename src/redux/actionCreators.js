import * as types from './actionTypes';
import axios from 'axios';
import { mapPromise} from './helpers';
import { toast } from 'react-toastify';

const url = 'https://where2code.herokuapp.com/api';

// Auth

export const setCookieToState = cookieData => ({
  type: types.SET_COOKIE_TO_STATE,
  payload: JSON.parse(cookieData),
});

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

export function authFailSignup(payload) {
  return {
    type: types.AUTH_FAILURE_SIGNUP,
    payload: payload,
  };
}

export function authFailLogin(payload) {
  return {
    type: types.AUTH_FAILURE_LOGIN,
    payload: payload,
  };
}

export const login = user => async dispatch => {
  try {
    dispatch(authLoad());
    const loginDetails = await axios.post(`${url}/auth/login`, user, {
      withCredentials: true,
    });
    dispatch(authSuccess(loginDetails.data.data));
    return loginDetails;
  } catch (error) {
    const errorValue = error.response
      ? error.response.data.message
      : error.message;
    dispatch(authFailLogin(errorValue));
    return error;
  }
};

export const successGitlog = userData => dispatch => {
  dispatch(authSuccess(userData));
};

export const signup = userData => async dispatch => {
  const { firstname, lastname, email, password } = userData;
  try {
    dispatch(authLoad());
    const userDetails = await axios.post(
      `${url}/auth/register`,
      {
        firstname,
        lastname,
        email,
        password,
      },
      { withCredentials: true },
    );
    dispatch(authSuccess(userDetails.data.data));
    return userDetails;
  } catch (error) {
    const errorValue = error.response
      ? error.response.data.message
      : error.message;
    return dispatch(authFailSignup(errorValue));
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

// ACTIONS FOR MAPS REDUCER
export const mapsSucces = () => ({
  type: types.FETCH_MAP_API_SUCCESS,
});
export const mapsFailure = error => ({
  type: types.FETCH_MAP_API_FAILURE,
  payload: error,
});

export const mapsLoading = () => async dispatch => {
  dispatch({ type: types.LOADING_MAP_API });
  try {
    // We import the Promise from helpers here
    Promise.all([mapPromise]).then(value => {
      dispatch(mapsSucces(value[0].maps));
    });
  } catch (error) {
    const errorValue = error.response.data
      ? error.response.data.message
      : error.message;
    dispatch(mapsFailure(errorValue));
  }
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
    let googleRating;
    if(locationInfo.data.data.place_id){
      googleRating = await axios.get( `https://cors-wahala.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${locationInfo.data.data.place_id}&fields=rating&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    }
    else{
      googleRating={
        data:{
          result:{
            rating:''
          }
        }
      }
    }
    const locationData = {
      ...locationInfo.data.data,
      averageRating:
        locationInfo.data.data.averageRating || googleRating.data.result.rating || "There aren't reviews for this location yet",
      isGoogleRating: googleRating.data.result.rating ? true:false
    };
    dispatch(singleLocSuccess(locationData));
  } catch (error) {
    const errorValue = error.response
      ? error.response.data.message
      : error.message;
    dispatch(singleLocFailure(errorValue));
  }
};

// ACTIONS FOR ACTIVE LOCATION REDUCER
export const setActive = location => ({
  type: types.SET_ACTIVE,
  payload: location,
});

export const clearActive = () => ({
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
  dispatch({ type: types.VERIFY_EMAIL_LOAD });
  return axios
    .post(`${url}/auth/forgot`, email, {
      withCredentials: true,
    })
    .then(res => {
      dispatch(verifyEmailSuccess(res.data));
      toast.success('successful, please check your email, thanks');
      return res;
    })
    .catch(err => {
      dispatch(verifyEmailFail(err.response.data.message || err.message));
      toast.error('account verification not successful');
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
      dispatch(resetPasswordSuccess(res.data));
      toast.success('password reset successful, please login!');
      return res;
    })
    .catch(err => {
      const errorValue = err.response ? err.response.data.message : err.message;
      dispatch(resetPasswordFail(errorValue));
      toast.error('password reset not successful, try again');
      return err;
    });
};

// when user have not completed email verification yet and
// request to receive another one.
export const resendEmailVerification = email => dispatch => {
  dispatch(verifyEmailLoad());
  return axios
    .post(`${url}/auth/verify`, email, {
      withCredentials: true,
    })
    .then(res => {
      dispatch(verifyEmailSuccess(res.data));
      return res;
    })
    .catch(err => {
      const errorValue = err.response ? err.response.data.message : err.message;
      dispatch(verifyEmailFail(errorValue));
      return err;
    });
};

export const setNewVerificationSent = () => ({
  type: types.NEW_VERIFY_EMAIL_SENT,
});

export const setPopupMessageSeen = () => ({
  type: types.POPUP_MESSAGE_SEEN,
});

// Add Review
export const setAddReviewTrue = () => ({
  type: types.SET_ADD_REVIEW_TRUE
})
export const setAddReviewFalse = () => ({
  type: types.SET_ADD_REVIEW_FALSE
})
export const addRatingValue = review => ({
  type: types.ADD_RATING_VALUE,
  payload: review
})
export const clearReview = () => ({
  type: types.CLEAR_REVIEW
})
export const addReviewSuccess = () => ({
  type: types.ADD_REVIEW_SUCCESS
})
export const addReviewFailure = error => ({
  type: types.ADD_REVIEW_FAILURE,
  payload: error
})
export const addReviewLoad = () => ({
  type: types.ADD_REVIEW_LOAD
})
export const addReview = (review, locId) => async dispatch => {
  dispatch(addReviewLoad())
  try {
    await axios.post(`${url}/locations/${locId}/review`, review);
    dispatch(fetchSingleLocation(locId))
    dispatch(addReviewSuccess())
  }
  catch (error) {
    dispatch(addReviewFailure(error.message))
  }
}
// Adding a new Location

export function addNewLocationLoad() {
  return {
    type: types.ADD_NEW_LOCATION_LOAD
  };
}

export function addNewLocationSuccess() {
  return {
    type: types.ADD_NEW_LOCATION_SUCCESS,
  };
}

export function addNewLocationFail(error) {
  return {
    type: types.ADD_NEW_LOCATION_FAIL,
    payload: error
  };
}

export const addNewLocation = locationData => dispatch => {
  dispatch(addNewLocationLoad());
  return axios
    .post(`${url}/locations`, locationData, {
      withCredentials: true
    })
    .then(res => {
      dispatch(addNewLocationSuccess());
      return res;
    })
    .catch(err => {
      const errorValue = err.response ? err.response.data.error : err.message;
      dispatch(addNewLocationFail(errorValue));
      return err;
    });
};

export const clearNewLocation = () => ({
  type: types.CLEAR_NEW_LOCATION
})

import * as types from '../actionTypes'
import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://where2code.herokuapp.com/api';

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
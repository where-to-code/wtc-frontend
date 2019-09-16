import * as types from '../actionTypes';

const initialState = {
    userId: '',
    isEmailVerified: true,
    email: '',
    loading: false,
    newEmailVerifRequested: false,
    popupMessageSeen: false,
    loginError: '',
    signUpError: ''
  };
  
  export const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.AUTH_LOAD:
        return {
          ...state,
          loading: true,
          error: ''
        };
  
      case types.AUTH_SUCCESS:
        return {
          ...state,
          loading: false,
          userId: action.payload.id,
          isEmailVerified: action.payload.isVerified,
          email: action.payload.email
        };
  
      case types.AUTH_FAILURE_SIGNUP:
        return {
          ...state,
          userId: '',
          loading: false,
          signUpError: action.payload
        };
  
      case types.AUTH_FAILURE_LOGIN:
        return {
          ...state,
          userId: '',
          loading: false,
          loginError: action.payload
        };
  
      case types.SET_COOKIE_TO_STATE:
        return {
          ...state,
          loading: false,
          userId: action.payload.id,
          isEmailVerified: action.payload.isVerified,
          email: action.payload.email
        }
  
      default:
        return state;
    }
  };
  
  export const verifyEmailReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.VERIFY_EMAIL_LOAD:
        return {
          ...state,
          loading: true,
          error: ''
        };
  
      case types.VERIFY_EMAIL_SUCCESS:
        return {
          ...state,
          loading: false,
          email: action.payload
        };
  
      case types.NEW_VERIFY_EMAIL_SENT:
        return {
          ...state,
          loading: true,
          newEmailVerifRequested: true,
          popupMessageSeen: true
        };
  
      case types.POPUP_MESSAGE_SEEN:
        return {
          ...state,
          popupMessageSeen: true
        };
  
      case types.VERIFY_EMAIL_FAILURE:
        return {
          ...state,
          email: '',
          loading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
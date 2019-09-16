import * as types from '../actionTypes';

const passwordState = {
    password: {},
    loading: false,
    error: ''
  };
  
  export const resetPasswordReducer = (state = passwordState, action) => {
    switch (action.type) {
      case types.RESET_PASSWORD_LOAD:
        return {
          ...state,
          loading: true,
          error: ''
        };
  
      case types.RESET_PASSWORD_SUCCESS:
        return {
          ...state,
          loading: false,
          password: action.payload
        };
  
      case types.RESET_PASSWORD_FAILURE:
        return {
          ...state,
          password: '',
          loading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
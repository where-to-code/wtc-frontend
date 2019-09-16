import * as types from '../actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

const url = 'https://where2code.herokuapp.com/api';

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
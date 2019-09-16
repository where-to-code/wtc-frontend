import * as actions from '../passwordResetActionCreators'
import * as types from '../../actionTypes'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';

const mock = new axiosMock(axios);
const middlewares = [thunk];
const url = 'https://where2code.herokuapp.com/api';
const mockStore = configureMockStore(middlewares);

describe('Reset Password', () => {
    const password = '12345abc';
    it('reset password load', () => {
      const expectedAction = {
        type: types.RESET_PASSWORD_LOAD,
      };
      expect(actions.resetPasswordLoad()).toEqual(expectedAction);
    });
    it('reset password success', () => {
      const expectedAction = {
        type: types.RESET_PASSWORD_SUCCESS,
        payload: password,
      };
      expect(actions.resetPasswordSuccess(password)).toEqual(expectedAction);
    });
    it('reset password failure', () => {
      const expectedAction = {
        type: types.RESET_PASSWORD_FAILURE,
        payload: 'There was an error',
      };
      expect(actions.resetPasswordFail('There was an error')).toEqual(
        expectedAction,
      );
    });
    it('should successfully reset password', async () => {
      const user = {
        id: 1,
        firstname: 'first',
        lastname: 'last',
        password: '12345abc',
      };
      mock.onPost(`${url}/auth/change/1`).reply(200, user);
      const expectedActions = [
        { type: types.RESET_PASSWORD_LOAD },
        {
          type: types.RESET_PASSWORD_SUCCESS,
          payload: user,
        },
      ];
      const store = mockStore({ resetPassword: user.password });
      await store.dispatch(actions.resetPassword(user.password, user.id));
      expect(store.getActions()).toEqual(expectedActions);
    });
    it('should fail reset password', async () => {
      const user = {
        id: 1,
        firstname: 'first',
        lastname: 'last',
        password: '12345abc',
      };
      const error = {
        message: 'Request failed with status 400',
      };
      mock.onPost(`${url}/auth/change/1`).reply(404, error);
      const expectedActions = [
        { type: types.RESET_PASSWORD_LOAD },
        {
          type: types.RESET_PASSWORD_FAILURE,
          payload: error.message,
        },
      ];
      const store = mockStore({ resetPassword: user.password });
      await store.dispatch(actions.resetPassword(user.password, user.id));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  
import * as actions from '../authActionCreators'
import * as types from '../../actionTypes'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';

const mock = new axiosMock(axios);
const middlewares = [thunk];
const url = 'https://where2code.herokuapp.com/api';
const mockStore = configureMockStore(middlewares);

describe('authentication', () => {
    const user = {
        email: 'jn@john.com',
        password: '12345abc',
    };
    it('auth success', () => {
        const expectedAction = {
            type: types.AUTH_SUCCESS,
            payload: user,
        };
        expect(actions.authSuccess(user)).toEqual(expectedAction);
    });
    it('auth failure', () => {
        const error = 'There was an error';
        const expectedAction = {
            type: types.AUTH_FAILURE_LOGIN,
            payload: error,
        };
        expect(actions.authFailLogin(error)).toEqual(expectedAction);
    });
    it('auth load', () => {
        const expectedAction = {
            type: types.AUTH_LOAD,
        };
        expect(actions.authLoad()).toEqual(expectedAction);
    });
    it('login', async () => {
        const userDetails = {
            data: {
                id: 1,
                firstname: 'Jane',
                lastname: 'Doe',
                isVerified: 'false',
            },
        };
        mock.onPost(`${url}/auth/login`).reply(200, userDetails);
        const expectedActions = [
            { type: types.AUTH_LOAD },
            { type: types.AUTH_SUCCESS, payload: userDetails.data },
        ];
        const store = mockStore({
            userId: '',
        });
        await store.dispatch(actions.login(user));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('fail login with 404', async () => {
        const error = {
            message: 'Request failed with status code 404',
        };
        mock.onPost(`${url}/auth/login`).reply(404, error);
        const expectedActions = [
            { type: types.AUTH_LOAD },
            {
                type: types.AUTH_FAILURE_LOGIN,
                payload: error.message,
            },
        ];
        const store = mockStore({ userId: '' });
        await store.dispatch(actions.login(user));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('fail login  with 500', async () => {
        const error = {
            message: 'Request failed with status code 500',
        };
        mock.onPost(`${url}/auth/login`).reply(500, error);
        const expectedActions = [
            { type: types.AUTH_LOAD },
            {
                type: types.AUTH_FAILURE_LOGIN,
                payload: error.message,
            },
        ];
        const store = mockStore({ userId: '' });
        await store.dispatch(actions.login(user));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('fail login  with 400', async () => {
        const error = {
            message: 'Request failed with status code 400',
        };
        mock.onPost(`${url}/auth/login`).reply(400, error);

        const expectedActions = [
            { type: types.AUTH_LOAD },
            {
                type: types.AUTH_FAILURE_LOGIN,
                payload: error.message,
            },
        ];
        const store = mockStore({ userId: '' });
        await store.dispatch(actions.login(user));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('fail login if there is network issue', async () => {
        mock.onPost(`${url}/auth/login`).networkError();
        const expectedActions = [
            { type: types.AUTH_LOAD },
            {
                type: types.AUTH_FAILURE_LOGIN,
                payload: 'Network Error',
            },
        ];
        const store = mockStore({ userId: '' });
        await store.dispatch(actions.login(user));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('signup', async () => {
        const userValue = {
            firstname: 'nab',
            lastname: 'gai',
            email: 'nabgai@gmail.com',
            password: '1234abc',
        };
        const userInfo = {
            data: {
                id: 1,
                firstname: 'nab',
                lastname: 'gai',
                email: 'nabgai@gmail.com',
            },
        };
        mock.onPost(`${url}/auth/register`).reply(201, userInfo);
        const expectedActions = [
            { type: types.AUTH_LOAD },
            { type: types.AUTH_SUCCESS, payload: userInfo.data },
        ];
        const store = mockStore({ userId: '' });
        await store.dispatch(actions.signup(userValue));
        expect(store.getActions()).toEqual(expectedActions);
    });
    it('signup should fail', async () => {
        const userValue = {
            firstname: 'nab',
            lastname: 'gai',
            email: 'nabgai@gmail.com',
            password: '1234abc',
        };
        mock.onPost(`${url}/auth/register`).networkError();
        const expectedActions = [
            { type: types.AUTH_LOAD },
            { type: types.AUTH_FAILURE_SIGNUP, payload: 'Network Error' },
        ];
        const store = mockStore({ userId: '' });
        await store.dispatch(actions.signup(userValue));
        expect(store.getActions()).toEqual(expectedActions);
    });
    describe('Verify Email', () => {
        const email = 'basi@g.com';
        it('verify load', () => {
            const expectedAction = {
                type: types.VERIFY_EMAIL_LOAD,
            };
            expect(actions.verifyEmailLoad()).toEqual(expectedAction);
        });
        it('verify success', () => {
            const expectedAction = {
                type: types.VERIFY_EMAIL_SUCCESS,
                payload: email,
            };
            expect(actions.verifyEmailSuccess(email)).toEqual(expectedAction);
        });
        it('verify failure', () => {
            const expectedAction = {
                type: types.VERIFY_EMAIL_FAILURE,
                payload: 'There was an error',
            };
            expect(actions.verifyEmailFail('There was an error')).toEqual(
                expectedAction,
            );
        });
        it('should successfully verify mail', async () => {
            mock.onPost(`${url}/auth/forgot`).reply(201, email);
            const expectedActions = [
                { type: types.VERIFY_EMAIL_LOAD },
                { type: types.VERIFY_EMAIL_SUCCESS, payload: email },
            ];
            const store = mockStore({ verifyEmail: [] });
            await store.dispatch(actions.verifyEmail(email));
            expect(store.getActions()).toEqual(expectedActions);
        });
        it('should fail verify mail', async () => {
            const error = {
                message: 'Request failed with status code 400',
            };
            mock.onPost(`${url}/auth/forgot`).reply(400, error);
            const expectedActions = [
                { type: types.VERIFY_EMAIL_LOAD },
                { type: types.VERIFY_EMAIL_FAILURE, payload: error.message },
            ];
            const store = mockStore({ verifyEmail: [] });
            await store.dispatch(actions.verifyEmail(email));
            expect(store.getActions()).toEqual(expectedActions);
        });
        it('should resend email verification', async () => {
            mock.onPost(`${url}/auth/verify`).reply(201, email);
            const expectedActions = [
                { type: types.VERIFY_EMAIL_LOAD },
                { type: types.VERIFY_EMAIL_SUCCESS, payload: email },
            ];
            const store = mockStore({ verifyEmail: [] });
            await store.dispatch(actions.resendEmailVerification(email));
            expect(store.getActions()).toEqual(expectedActions);
        });
        it('should fail resend email verification', async () => {
            const error = {
                message: 'Request failed with status code 400',
            };
            mock.onPost(`${url}/auth/verify`).reply(400, error);
            const expectedActions = [
                { type: types.VERIFY_EMAIL_LOAD },
                { type: types.VERIFY_EMAIL_FAILURE, payload: error.message },
            ];
            const store = mockStore({ verifyEmail: [] });
            await store.dispatch(actions.resendEmailVerification(email));
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});
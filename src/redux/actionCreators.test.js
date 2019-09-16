import * as actions from './actionCreators';
import thunk from 'redux-thunk';
import * as types from './actionTypes';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';

const mock = new axiosMock(axios);
const middlewares = [thunk];
const url = 'https://where2code.herokuapp.com/api';
const mockStore = configureMockStore(middlewares);
const store = mockStore({
  locations: [],
  maps: {},
  location: {},
  activeLocation: {},
});
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

describe('fetch locations', () => {
  const mockLocations = {
    status: 200,
    data: [
      {
        id: 1,
        description: '123 Arizona road',
        name: 'Ariz Coffee Shop',
        image_url: 'image',
        address: 'some address',
        longitude: '0.999923',
        latitude: '0.273444',
        created_at: '',
      },
    ],
  };
  const currentPosition = {
    lat: 0.273443,
    lng: 0.999922,
  };
  it('location_success', () => {
    const expectedAction = {
      type: types.FETCH_LOCATIONS_SUCCESS,
      payload: mockLocations.data,
    };
    expect(actions.locationSuccess(mockLocations)).toEqual(expectedAction);
  });
  it('location_failure', () => {
    const error = 'There was an error';
    const expectedAction = {
      type: types.FETCH_LOCATIONS_FAILURE,
      payload: error,
    };
    expect(actions.locationSuccess(mockLocations, currentPosition)).not.toEqual(
      expectedAction,
    );
    expect(actions.locationFailure(error)).toEqual(expectedAction);
  });

  it('location_loading success', async () => {
    mock
      .onGet(
        `${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`,
      )
      .reply(200, mockLocations);
    //mock the get method when locations are succesfully
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      { type: types.FETCH_LOCATIONS_SUCCESS, payload: mockLocations.data },
      { type: types.ALL_LOCATIONS_SUCCESS, payload: mockLocations.data }
    ];
    const store = mockStore({
      locations: [],
      allLocations: [],
      maps: {},
      location: {},
      activeLocation: {},
    });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('location_loading failure', async () => {
    const error = {
      message: 'Request failed with status code 500',
    };
    mock
      .onGet(
        `${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`,
      )
      .reply(404, error);
    //mock the get method when path is not found
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      {
        type: types.FETCH_LOCATIONS_FAILURE,
        payload: error.message,
      },
    ];
    const store = mockStore({ locations: [] });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('location_loading failure with 500', async () => {
    const error = {
      message: 'Request failed with status code 500',
    };
    mock
      .onGet(
        `${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`,
      )
      .reply(500, error);
    //mock the get method for other causes of error
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      {
        type: types.FETCH_LOCATIONS_FAILURE,
        payload: error.message,
      },
    ];
    const store = mockStore({ locations: [] });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('location_loading failure with network error', async () => {
    //mock the get method when network fails
    mock
      .onGet(
        `${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`,
      )
      .networkError();
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      { type: types.FETCH_LOCATIONS_FAILURE, payload: 'Network Error' },
    ];
    const store = mockStore({ locations: mockLocations });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
describe('filter locations', () => {
  const mockLocations = {
    status: 200,
    data: [
      {
        id: 1,
        description: '123 Arizona road',
        name: 'Ariz Coffee Shop',
        image_url: 'image',
        address: 'some address',
        longitude: '0.999923',
        latitude: '0.273444',
        created_at: '',
      },
    ],
  };
  it('filter location successful', async () => {
    const expectedActions = [
      { type: types.FETCH_LOCATIONS_SUCCESS, payload: mockLocations.data },
    ];
    const store = mockStore({ locations: [] });
    await store.dispatch(actions.locationSuccess(mockLocations));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('filter location failure', async () => {
    const expectedActions = [
      { type: types.FETCH_LOCATIONS_FAILURE, payload: 'There was an error' },
    ];
    const store = mockStore({ locations: [] });
    await store.dispatch(actions.locationFailure('There was an error'));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
describe('clear locations', () => {
  it('should clear locations', () => {
    const expectedAction = {
      type: types.CLEAR_LOCATIONS,
    };
    expect(actions.clearLocations()).toEqual(expectedAction);
  });
});
describe('fetch maps', () => {
  it('mapsSuccess', () => {
    expect(actions.mapsSucces({})).toBeTruthy();
  });
  it('mapsFailure', () => {
    const error = 'There was an error';
    const expectedAction = {
      type: types.FETCH_MAP_API_FAILURE,
      payload: error,
    };
    expect(actions.mapsSucces({})).not.toEqual(expectedAction);
    expect(actions.mapsFailure(error)).toEqual(expectedAction);
  });
  it('should get maps', async () => {
    const expectedActions = [{ type: types.LOADING_MAP_API }];
    const store = mockStore({ maps: [] });
    await store.dispatch(actions.mapsLoading());
    const results = await store.getActions();
    expect(results).toEqual(expectedActions);
  });
  it('should fail', async () => {
    const expectedActions = [
      {
        type: types.FETCH_MAP_API_FAILURE,
        payload: 'fail to load',
      },
    ];
    const store = mockStore({ maps: [] });
    await store.dispatch(actions.mapsFailure('fail to load'));
    const results = await store.getActions();
    expect(results).toEqual(expectedActions);
  });
});

describe('geolocation', () => {
  it('set geolocation true', () => {
    const expectedAction = {
      type: types.SET_GEOLOCATION_TRUE,
    };
    expect(actions.setGeolocationTrue()).toEqual(expectedAction);
  });
  it('set geolocation false', () => {
    const expectedAction = {
      type: types.SET_GEOLOCATION_FALSE,
    };
    expect(actions.setGeolocationFalse()).toEqual(expectedAction);
  });
  it('set geolocation value', () => {
    const location = {
      latitude: 0.33555,
      longitude: 54.3322,
    };
    const expectedAction = {
      type: types.SET_GEOLOCATION_VALUE,
      payload: location,
    };
    expect(actions.setGeolocationValue(location)).toEqual(expectedAction);
  });
});

describe('Single Location', () => {
  const singleLocation = {
    status: 200,
    data: {
      id: 1,
      description: '123 Arizona road',
      name: 'Ariz Coffee Shop',
      image_url: 'image',
      address: 'some address',
      longitude: '0.999923',
      latitude: '0.273444',
      created_at: '',
      averageRating: 3.5,
      place_id: 'ChIJrTLr-GyuEmsRBfy61i59si0',
      isGoogleRating:true
    },
  };
  it('single location success', () => {
    const expectedAction = {
      type: types.FETCH_SINGLE_LOCATIONS_SUCCESS,
      payload: singleLocation,
    };
    expect(actions.singleLocSuccess(singleLocation)).toEqual(expectedAction);
  });
  it('single location failure', () => {
    const expectedAction = {
      type: types.FETCH_SINGLE_LOCATIONS_FAILURE,
      payload: 'There was an error',
    };
    expect(actions.singleLocFailure('There was an error')).toEqual(
      expectedAction,
    );
  });
  it('should fetch locations', async () => {
    await mock.onGet(`${url}/locations/1`).reply(200, singleLocation);
    await mock
      .onGet(
        `https://cors-wahala.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${singleLocation.data.place_id}&fields=rating&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      )
      .reply(200, ({
          result:{
            rating:3.5
          }
      })
    );

    const expectedActions = [
      { type: types.LOADING_SINGLE_LOCATION },
      {
        type: types.FETCH_SINGLE_LOCATIONS_SUCCESS,
        payload: singleLocation.data,
      },
    ];
    const store = mockStore({ location: singleLocation.data });
    await store.dispatch(actions.fetchSingleLocation(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('should fail to fetch locations', async () => {
    const error = {
      message: 'Request failed with status code 404',
    };
    await mock.onGet(`${url}/locations/1`).reply(404, error);
    await mock
      .onGet(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid=${singleLocation.data.place_id}&fields=rating&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
      )
      .reply(404, error);
    const expectedActions = [
      { type: types.LOADING_SINGLE_LOCATION },
      { type: types.FETCH_SINGLE_LOCATIONS_FAILURE, payload: error.message },
    ];
    const store = mockStore({ location: singleLocation.data });
    await store.dispatch(actions.fetchSingleLocation(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('Active locations', () => {
  const location = {
    data: {
      id: 1,
      description: '123 Arizona road',
      name: 'Ariz Coffee Shop',
      image_url: 'image',
      address: 'some address',
      longitude: '0.999923',
      latitude: '0.273444',
      created_at: '',
    },
  };
  it('set active', () => {
    const expectedAction = {
      type: types.SET_ACTIVE,
      payload: location.data,
    };
    expect(actions.setActive(location.data)).toEqual(expectedAction);
  });
  it('clear active', () => {
    const expectedAction = {
      type: types.CLEAR_ACTIVE,
    };
    expect(actions.clearActive()).toEqual(expectedAction);
  });
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

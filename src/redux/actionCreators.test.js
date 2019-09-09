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
describe('fetch locations', () => {
  const locations = [
    {
      status: 200,
      info: {
        id: 1,
        description: '123 Arizona road',
        name: 'Ariz Coffee Shop',
        image_url: 'image',
        address: 'some address',
        longitude: '0.999923',
        latitude: '0.273444',
        created_at: ''
      }
    }
  ];
  const currentPosition = {
    lat: 0.273443,
    lng: 0.999922
  }
  it('location_success', () => {
    const expectedAction = {
      type: types.FETCH_LOCATIONS_SUCCESS,
      payload: locations.info
    };
    expect(actions.locationSuccess(locations)).toEqual(expectedAction);
  });
  it('location_failure', () => {
    const error = 'There was an error';
    const expectedAction = {
      type: types.FETCH_LOCATIONS_FAILURE,
      payload: error
    };
    expect(actions.locationSuccess(locations, currentPosition)).not.toEqual(expectedAction);
    expect(actions.locationFailure(error)).toEqual(expectedAction);
  });
  it('location_loading success', async () => {
    mock.onGet(`${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`).reply(200, locations);
    //mock the get method when locations are succesfully
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      { type: types.FETCH_LOCATIONS_SUCCESS, payload: locations.info }
    ];
    const store = mockStore({ locations: [], maps: {}, location: {}, activeLocation: {} });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('location_loading failure', async () => {
    mock.onGet(`${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`).reply(404);
    //mock the get method when path is not found
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      {
        type: types.FETCH_LOCATIONS_FAILURE,
        payload: 'Request failed with status code 404'
      }
    ];
    const store = mockStore({ locations: [] });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('location_loading failure', async () => {
    mock.onGet(`${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`).reply(500);
    //mock the get method for other causes of error
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      {
        type: types.FETCH_LOCATIONS_FAILURE,
        payload: 'Request failed with status code 500'
      }
    ];
    const store = mockStore({ locations: [] });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });
  it('location_loading failure', async () => {
    //mock the get method when network fails
    mock.onGet(`${url}/locations?lat=${currentPosition.lat}&long=${currentPosition.lng}`).networkError();
    const expectedActions = [
      { type: types.LOADING_LOCATIONS },
      { type: types.FETCH_LOCATIONS_FAILURE, payload: 'Network Error' }
    ];
    const store = mockStore({ locations });
    await store.dispatch(actions.locationLoads(currentPosition));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

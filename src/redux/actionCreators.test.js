import * as actions from './actionCreators';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';

describe('fetch locations', () => {
const mock = new axiosMock(axios)
const middlewares = [thunk]
let url;
const mockStore = configureMockStore(middlewares)
    const locations=[{
        id:1,
        description:'123 Arizona road',
        name: "Ariz Coffee Shop",
        longitude:'0.999923',
        latitude:'0.273444'
    }]
    it('location_success', () => {
      const expectedAction = {
        type: types.FETCH_LOCATIONS_SUCCESS,
        payload:locations
      }
      expect(actions.locationSuccess(locations)).toEqual(expectedAction)
    })
    it('location_failure',() => {
      const error = 'There was an error';
      const expectedAction = {
        type: types.FETCH_LOCATIONS_FAILURE,
        payload:error
      }
      expect(actions.locationSuccess(locations)).not.toEqual(expectedAction)
      expect(actions.locationFailure(error)).toEqual(expectedAction)
    })
    it('location_loading success', async ()=>{
      mock.onGet(`${url}/locations`).reply(200, locations);
      const expectedActions = [
        { type: types.LOADING_LOCATIONS },
        { type: types.FETCH_LOCATIONS_SUCCESS, payload:locations }
      ]
      const store = mockStore({ locations:[] })
      await store.dispatch(actions.locationLoads())
        expect(store.getActions()).toEqual(expectedActions)
    })
    it('location_loading failure',async() => {
      mock.onGet(`${url}/locations`).reply(404);
      const expectedActions =[
        { type: types.LOADING_LOCATIONS },
        { type: types.FETCH_LOCATIONS_FAILURE, payload:'Request failed with status code 404' }
      ]
      const store = mockStore({ locations:[] })
      await store.dispatch(actions.locationLoads())
        expect(store.getActions()).toEqual(expectedActions)
    })
    it('location_loading failure',async() => {
      mock.onGet(`${url}/locations`).networkError();
      const expectedActions =[
        { type: types.LOADING_LOCATIONS },
        { type: types.FETCH_LOCATIONS_FAILURE, payload:'Network Error' }
      ]
      const store = mockStore({ locations })
      await store.dispatch(actions.locationLoads())
        expect(store.getActions()).toEqual(expectedActions)
    })
  })
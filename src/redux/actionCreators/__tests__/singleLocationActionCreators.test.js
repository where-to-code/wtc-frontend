import * as actions from '../singleLocationActionCreators'
import * as types from '../../actionTypes'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';

const mock = new axiosMock(axios);
const middlewares = [thunk];
const url = 'https://where2code.herokuapp.com/api';
const mockStore = configureMockStore(middlewares);

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
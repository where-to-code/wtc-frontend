import * as actions from '../locationsActionCreators'
import * as types from '../../actionTypes'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import axios from 'axios';
import axiosMock from 'axios-mock-adapter';

const mock = new axiosMock(axios);
const middlewares = [thunk];
const url = 'https://where2code.herokuapp.com/api';
const mockStore = configureMockStore(middlewares);

describe('locations action creators', () => {
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
})
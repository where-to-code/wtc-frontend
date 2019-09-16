import { locationsReducer } from '../locationsReducer'
import * as types from '../../actionTypes';
describe('locations reducer', () => {
    const locations = [
        {
            id: 1,
            description: '123 Arizona road',
            name: 'Ariz Coffee Shop',
            longitude: '0.999923',
            latitude: '0.273444',
        },
    ];

    it('should return the initial state', () => {
        expect(locationsReducer(undefined, {})).toEqual({
            loadingLocation: false,
            locations: [],
            allLocations: [],
            error: null,
        });
    });
    it('should load locations', () => {
        expect(
            locationsReducer(
                { loadingLocation: false },
                {
                    type: types.LOADING_LOCATIONS,
                },
            ),
        ).toEqual({
            loadingLocation: true,
        });
        // test the spread state functionality
        expect(
            locationsReducer(
                { loadingLocation: false, locations: [], error: null },
                {
                    type: types.LOADING_LOCATIONS,
                },
            ),
        ).toEqual({
            loadingLocation: true,
            locations: [],
            error: null,
        });
    });
    it('should get all locations on success', () => {
        expect(
            locationsReducer(
                { loadingLocation: false, locations: [], error: null },
                {
                    type: types.FETCH_LOCATIONS_SUCCESS,
                    payload: locations,
                },
                {
                    type: types.ALL_LOCATIONS_SUCCESS,
                    payload: locations,
                },
            ),
        ).toEqual({
            loadingLocation: false,
            locations,
            error: null,
        });
    });
    it('should show error on failure', () => {
        expect(
            locationsReducer(
                { loadingLocation: false, locations: [], error: null },
                {
                    type: types.FETCH_LOCATIONS_FAILURE,
                    payload: 'There was an error',
                },
            ),
        ).toEqual({
            loadingLocation: false,
            locations: [],
            error: 'There was an error',
        });
    });
});


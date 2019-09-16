import * as types from '../../actionTypes';
import { singleLocationReducer } from '../singleLocationReducer'

describe('single location reducer', () => {
    const location = {
      id: 1,
      description: '123 Arizona road',
      name: 'Ariz Coffee Shop',
      longitude: '0.999923',
      latitude: '0.273444',
    };
  
    it('should return the initial state', () => {
      expect(singleLocationReducer(undefined, {})).toEqual({
        loadingSingleLoc: false,
        location: null,
        error: null,
      });
    });
    it('should load locations', () => {
      expect(
        singleLocationReducer(
          { loadingSingleLoc: false },
          {
            type: types.LOADING_SINGLE_LOCATION,
          },
        ),
      ).toEqual({
        loadingSingleLoc: true,
      });
      // test the spread state functionality
      expect(
        singleLocationReducer(
          { loadingSingleLoc: false, location: null, error: null },
          {
            type: types.LOADING_SINGLE_LOCATION,
          },
        ),
      ).toEqual({
        loadingSingleLoc: true,
        location: null,
        error: null,
      });
    });
    it('should get a single locations on success', () => {
      expect(
        singleLocationReducer(
          { loadingSingleLoc: false, location: null, error: null },
          {
            type: types.FETCH_SINGLE_LOCATIONS_SUCCESS,
            payload: location,
          },
        ),
      ).toEqual({
        loadingSingleLoc: false,
        location,
        error: null,
      });
    });
    it('should show error on failure', () => {
      expect(
        singleLocationReducer(
          { loadingSingleLoc: false, location: null, error: null },
          {
            type: types.FETCH_SINGLE_LOCATIONS_FAILURE,
            payload: 'There was an error',
          },
        ),
      ).toEqual({
        loadingSingleLoc: false,
        location: null,
        error: 'There was an error',
      });
    });
  });
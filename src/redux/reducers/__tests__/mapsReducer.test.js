import * as types from '../../actionTypes';
import { mapsReducer } from '../mapsReducer'

describe('maps reducer', () => {

    it('should return the initial state', () => {
      expect(mapsReducer(undefined, {})).toEqual({
        loadingMaps: false,
        error: null,
        geolocation: null,
        isGeolocated: false,
      });
    });
    it('should load maps', () => {
      expect(
        mapsReducer(
          { loadingMaps: false },
          {
            type: types.LOADING_MAP_API,
          },
        ),
      ).toEqual({
        loadingMaps: true,
      });
      // test the spread state functionality
      expect(
        mapsReducer(
          {
            loadingMaps: false,
            error: null,
            geolocation: null,
            isGeolocated: false,
          },
          {
            type: types.LOADING_MAP_API,
          },
        ),
      ).toEqual({
        loadingMaps: true,
        error: null,
        geolocation: null,
        isGeolocated: false,
      });
    });
    it('should set geoloaction to true on success', () => {
      expect(
        mapsReducer(
          {
            loadingMaps: false,
            error: null,
            geolocation: null,
            isGeolocated: false,
          },
          {
            type: types.SET_GEOLOCATION_TRUE,
            payload: true,
          },
        ),
      ).toEqual({
        loadingMaps: false,
        error: null,
        geolocation: null,
        isGeolocated: true,
      });
    });
    it('should show error on loading failure', () => {
      expect(
        mapsReducer(
          {
            loadingMaps: false,
            error: null,
            geolocation: null,
            isGeolocated: false,
          },
          {
            type: types.FETCH_MAP_API_FAILURE,
            payload: 'There was an error',
          },
        ),
      ).toEqual({
        loadingMaps: false,
        loadingLocation: false,
        error: 'There was an error',
        geolocation: null,
        isGeolocated: false,
      });
    });
    it('should set geolocation to false on geolocation failure', () => {
      expect(
        mapsReducer(
          {
            loadingMaps: false,
            error: null,
            geolocation: null,
            isGeolocated: false,
          },
          {
            type: types.SET_GEOLOCATION_FALSE,
            payload: false,
          },
        ),
      ).toEqual({
        loadingMaps: false,
        error: null,
        geolocation: null,
        isGeolocated: false,
      });
    });
    it('should set value of geolocation on geolocation success', () => {
      expect(
        mapsReducer(
          {
            loadingMaps: false,
            error: null,
            geolocation: null,
            isGeolocated: false,
          },
          {
            type: types.SET_GEOLOCATION_VALUE,
            payload: {id:5},
          },
        ),
      ).toEqual({
        loadingMaps: false,
        error: null,
        geolocation: {id:5},
        isGeolocated: false,
      });
    });
  });
  
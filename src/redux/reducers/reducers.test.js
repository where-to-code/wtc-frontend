import { locationReducer, singleLocaReducer, mapsReducer } from './reducers';
import * as types from '../actionTypes';

describe('location reducer', () => {
  const locations = [
    {
      id: 1,
      description: '123 Arizona road',
      name: 'Ariz Coffee Shop',
      longitude: '0.999923',
      latitude: '0.273444',
    },
  ];

  const geolocation = {
    lat: 0.273443,
    lng: 0.999922,
  };

  it('should return the initial state', () => {
    expect(locationReducer(undefined, {})).toEqual({
      loadingLocation: false,
      locations: [],
      allLocations: [],
      error: null,
    });
  });
  it('should load locations', () => {
    expect(
      locationReducer(
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
      locationReducer(
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
      locationReducer(
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
      locationReducer(
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

describe('single location reducer', () => {
  const location = {
    id: 1,
    description: '123 Arizona road',
    name: 'Ariz Coffee Shop',
    longitude: '0.999923',
    latitude: '0.273444',
  };

  it('should return the initial state', () => {
    expect(singleLocaReducer(undefined, {})).toEqual({
      loadingSingleLoc: false,
      location: null,
      error: null,
    });
  });
  it('should load locations', () => {
    expect(
      singleLocaReducer(
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
      singleLocaReducer(
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
      singleLocaReducer(
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
      singleLocaReducer(
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

describe('geolocation reducer', () => {

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


describe('auth reducer', () => {

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

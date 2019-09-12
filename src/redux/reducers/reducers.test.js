import { locationReducer ,singleLocaReducer} from './reducers';
import * as types from '../actionTypes';

describe('location reducer', () => {
  const locations = [
    {
      id: 1,
      description: '123 Arizona road',
      name: 'Ariz Coffee Shop',
      longitude: '0.999923',
      latitude: '0.273444'
    }
  ];

  const geolocation = {
    lat: 0.273443,
    lng: 0.999922
  }

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
          type: types.LOADING_LOCATIONS
        }
      )
    ).toEqual({
      loadingLocation: true
    });
    // test the spread state functionality
    expect(
      locationReducer(
        { loadingLocation: false, locations: [], error: null },
        {
          type: types.LOADING_LOCATIONS
        }
      )
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
          payload: locations
        },
        {
          type: types.ALL_LOCATIONS_SUCCESS,
          payload: locations
        }
      )
    ).toEqual({
      loadingLocation: false,
      locations,
      error: null
    });
  });
  it('should show error on failure', () => {
    expect(
      locationReducer(
        { loadingLocation: false, locations: [], error: null },
        {
          type: types.FETCH_LOCATIONS_FAILURE,
          payload: 'There was an error'
        }
      )
    ).toEqual({
      loadingLocation: false,
      locations: [],
      error: 'There was an error'
    });
  });
});



describe('single location reducer', () => {
  const location= 
    {
      id: 1,
      description: '123 Arizona road',
      name: 'Ariz Coffee Shop',
      longitude: '0.999923',
      latitude: '0.273444'
    }
  

  const geolocation = {
    lat: 0.273443,
    lng: 0.999922
  }

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
          type: types.LOADING_SINGLE_LOCATION
        }
      )
    ).toEqual({
      loadingSingleLoc: true
    });
    // test the spread state functionality
    expect(
      singleLocaReducer(
        { loadingSingleLoc: false, location: null, error: null },
        {
          type: types.LOADING_SINGLE_LOCATION
        }
      )
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
          payload: location
        }
      )
    ).toEqual({
      loadingSingleLoc: false,
      location,
      error: null
    });
  });
  it('should show error on failure', () => {
    expect(
      singleLocaReducer(
        { loadingSingleLoc: false, location: null, error: null },
        {
          type: types.FETCH_SINGLE_LOCATIONS_FAILURE,
          payload: 'There was an error'
        }
      )
    ).toEqual({
      loadingSingleLoc: false,
      location: null,
      error: 'There was an error'
    });
  });
});

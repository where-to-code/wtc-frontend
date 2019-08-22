import * as types from './actionTypes';

export const locationReducer = (
  state = { loadingLocation: false, locations: [
    {
      id: 1,
      description: '123 Arizona road',
      name: 'Ariz Coffee Shop',
      image_url: 'image',
      address: 'some address',
      longitude: -0.000737, 
      latitude: 51.468507,
      created_at: ''
    }
  ], error: null },
  action
) => {
  switch (action.type) {
    case types.LOADING_LOCATIONS:
      return { ...state, loadingLocation: true };
    case types.FETCH_LOCATIONS_SUCCESS:
      return { ...state, loadingLocation: false, locations: action.payload };
    case types.FETCH_LOCATIONS_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    default:
      return state;
  }
};

export const mapsReducer = (state = { loadingMaps: false, mapsObj: null, error: null }, action) => {
  switch (action.type) {
    case types.LOADING_MAP_API:
      return { ...state, loadingMaps: true };
    case types.FETCH_MAP_API_SUCCESS:
      return {...state, loadingLocation: false, mapsObj: action.payload};
    case types.FETCH_MAP_API_FAILURE:
      return {...state, loadingLocation: false, error: action.payload}
    default:
      return state;
  }
}

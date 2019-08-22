import * as types from './actionTypes';

export const locationReducer = (
  state = {
    loadingLocation: false,
    locations: [
      {
        name: 'Al Ain Tower',
        description: 'A Starbucks shop to work out from',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2dDHB_nliR3160ubZgp6J9A3nfPUsHMXcoVGwgb4x3oBzgGNU',
        address: 'Khaldiya Area, Abu Dhabi Island, Abu Dhabi, AZ',
        latitude: '24.51',
        longitude: '54.54'
      },
      {
        name: 'Eastern Mangroves',
        description: 'A Starbucks shop to work out from',
        image_url:
          'https://purewows3.imgix.net/images/articles/2017_01/bespoke_coworking_spaces_san_francisco.png?auto=format,compress&cs=strip',
        address: 'Al Salam Street, The Mangroves, Abu Dhabi, AZ',
        latitude: '24.48',
        longitude: '54.38'
      },
      {
        name: 'Yas Mall 3',
        description: 'A Starbucks shop to work out from',
        image_url:
          'https://www.rent24.com/wp-content/uploads/coworking-space-berlin-schoeneberg.jpg',
        address: 'YAS Island, Abu Dhabi, AZ, AE',
        latitude: '24.48',
        longitude: '54.6'
      },
      {
        name: 'Al Seef Village',
        description: 'A Starbucks shop to work out from',
        image_url:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiLqR1M8Oq2awl4d6DrzDOeN90CZCIHZA6M5YI6GIg77mQgH4AwQ',
        address: 'Salam Street, Ministries District, Abu Dhabi, AZ',
        latitude: '24.48',
        longitude: '54.38'
      }
    ],
    error: null
  },
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

export const mapsReducer = (
  state = { loadingMaps: false, mapsObj: null, error: null },
  action
) => {
  switch (action.type) {
    case types.LOADING_MAP_API:
      return { ...state, loadingMaps: true };
    case types.FETCH_MAP_API_SUCCESS:
      return { ...state, loadingLocation: false, mapsObj: action.payload };
    case types.FETCH_MAP_API_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    default:
      return state;
  }
};

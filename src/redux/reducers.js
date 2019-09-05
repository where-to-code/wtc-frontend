import * as types from './actionTypes';

export const locationReducer = (
  state = {
    loadingLocation: false,
    locations: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case types.LOADING_LOCATIONS:
      return { ...state, loadingLocation: true };
    case types.FETCH_LOCATIONS_SUCCESS:
      return { error: null, loadingLocation: false, locations: action.payload };
    case types.FETCH_LOCATIONS_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    case types.CLEAR_LOCATIONS:
      return { ...state, locations: []}
    default:
      return state;
  }
};

export const singleLocaReducer = (
  state = { loadingSingleLoc: false, location: null, error: null },
  action
) => {
  switch (action.type) {
    case types.LOADING_SINGLE_LOCATION:
      return { ...state, loadingSingleLoc: true };
    case types.FETCH_SINGLE_LOCATIONS_SUCCESS:
      return { ...state, loadingSingleLoc: false, location: action.payload };
    case types.FETCH_SINGLE_LOCATIONS_FAILURE:
      return { ...state, loadingSingleLoc: false, error: action.payload };
    default:
      return state;
  }
};

export const mapsReducer = (
  state = {
    loadingMaps: false,
    mapsObj: null,
    error: null,
    geolocation: null,
    isGeolocated: false
  },
  action
) => {
  switch (action.type) {
    case types.LOADING_MAP_API:
      return { ...state, loadingMaps: true };
    case types.FETCH_MAP_API_SUCCESS:
      return {
        ...state,
        loadingLocation: false,
        mapsObj: action.payload.mapsObj,
        geolocation: action.payload.geolocation
      };
    case types.FETCH_MAP_API_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    case types.SET_GEOLOCATION_TRUE:
      return { ...state, isGeolocated: true };
    case types.SET_GEOLOCATION_FALSE:
      return { ...state, isGeolocated: false };
    default:
      return state;
  }
};

export const activeLocation = (state = null, action) => {
  switch (action.type) {
    case types.SET_ACTIVE:
      return action.payload;
    case types.CLEAR_ACTIVE:
      return null
    default:
      return state;
  }
};

const initialState = {
  userId: '',
  isEmailVerified: true,
  loading: false,
  error: '',
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.AUTH_LOAD:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        userId: action.payload.id,
        isEmailVerified: action.payload.isVerified,
      };

    case types.AUTH_FAILURE:
      return {
        ...state,
        userId: '',
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};


export const verifyEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VERIFY_EMAIL_LOAD:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case types.VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        email: action.payload
      };

    case types.VERIFY_EMAIL_FAILURE:
      return {
        ...state,
        email: '',
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};


const passwordState = {
  password: {},
  loading: false,
  error: '',
};

export const resetPasswordReducer = (state = passwordState, action) => {
  switch (action.type) {
    case types.RESET_PASSWORD_LOAD:
      return {
        ...state,
        loading: true,
        error: ''
      };

    case types.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        password: action.payload
      };

    case types.RESET_PASSWORD_FAILURE:
      return {
        ...state,
        password: '',
        loading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

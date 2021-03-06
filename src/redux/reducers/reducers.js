import * as types from '../actionTypes';

export const locationReducer = (
  state = {
    loadingLocation: false,
    locations: [],
    allLocations: [],
    error: null
  },
  action
) => {
  switch (action.type) {
    case types.LOADING_LOCATIONS:
      return { ...state, loadingLocation: true };
    case types.FETCH_LOCATIONS_SUCCESS:
      return {
        ...state,
        error: null,
        loadingLocation: false,
        locations: action.payload
      };
    case types.ALL_LOCATIONS_SUCCESS:
      return {
        ...state,
        error: null,
        loadingLocation: false,
        allLocations: action.payload,
        locations: action.payload
      };
    case types.FETCH_LOCATIONS_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    case types.CLEAR_LOCATIONS:
      return { ...state, locations: [] };
    case types.CLEAR_ALL_LOCATIONS:
      return { ...state, allLocations: [] };
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
    error: null,
    geolocation: null,
    isGeolocated: false
  },
  action
) => {
  switch (action.type) {
    case types.LOADING_MAP_API:
      return { ...state, loadingMaps: true };
    case types.FETCH_MAP_API_FAILURE:
      return { ...state, loadingLocation: false, error: action.payload };
    case types.SET_GEOLOCATION_TRUE:
      return { ...state, isGeolocated: true };
    case types.SET_GEOLOCATION_FALSE:
      return { ...state, isGeolocated: false };
    case types.SET_GEOLOCATION_VALUE:
      return { ...state, geolocation: action.payload };
    default:
      return state;
  }
};

export const activeLocation = (state = null, action) => {
  switch (action.type) {
    case types.SET_ACTIVE:
      return action.payload;
    case types.CLEAR_ACTIVE:
      return null;
    default:
      return state;
  }
};

const initialState = {
  userId: '',
  isEmailVerified: true,
  email: '',
  loading: false,
  newEmailVerifRequested: false,
  popupMessageSeen: false,
  loginError: '',
  signUpError: ''
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
        email: action.payload.email
      };

    case types.AUTH_FAILURE_SIGNUP:
      return {
        ...state,
        userId: '',
        loading: false,
        signUpError: action.payload
      };

    case types.AUTH_FAILURE_LOGIN:
      return {
        ...state,
        userId: '',
        loading: false,
        loginError: action.payload
      };

    case types.SET_COOKIE_TO_STATE:
      return {
        ...state,
        loading: false,
        userId: action.payload.id,
        isEmailVerified: action.payload.isVerified,
        email: action.payload.email
      }

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

    case types.NEW_VERIFY_EMAIL_SENT:
      return {
        ...state,
        loading: true,
        newEmailVerifRequested: true,
        popupMessageSeen: true
      };

    case types.POPUP_MESSAGE_SEEN:
      return {
        ...state,
        popupMessageSeen: true
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
  error: ''
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

export const addReviewReducer = (state = {
  isShown: false,
  loading: false,
  error: null,
  review: {
    quietness: null,
    wifi_speed: null,
    community: null,
    accessibility: null,
    description: '',
    user_id: null,
  },
}, action) => {
  switch (action.type) {
    case types.ADD_REVIEW_LOAD:
      return { ...state, loading: true };
    case types.ADD_REVIEW_SUCCESS:
      return { ...state, loading: false };
    case types.ADD_REVIEW_FAILURE:
      return { ...state, loading: false, error: action.payload }
    case types.SET_ADD_REVIEW_FALSE:
      return { ...state, isShown: false };
    case types.SET_ADD_REVIEW_TRUE:
      return { ...state, isShown: true };
    case types.ADD_RATING_VALUE:
      return { ...state, review: action.payload };
    case types.CLEAR_REVIEW:
      return {
        ...state, review: {
          quietness: null,
          wifi_speed: null,
          community: null,
          accessibility: null,
          description: '',
          user_id: null,
        }
      };
    default:
      return state;
  }
}
// Adding new location

const newLocation = {
  location: null,
  isShown: false,
  loading: false,
  isAdded: false,
  error: ''
};

export const addLocationReducer = (state = newLocation, action) => {
  switch (action.type) {
    case types.ADD_NEW_LOCATION_LOAD:
      return {
        ...state,
        loading: true,
      };

    case types.ADD_NEW_LOCATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isAdded: true,
        location: action.payload
      };

    case types.ADD_NEW_LOCATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.CLEAR_NEW_LOCATION:
      return { ...state, isAdded: false }
    case types.SHOW_ADD_LOCATION:
      return { ...state, isShown: true }
    case types.HIDE_ADD_LOCATION:
      return { ...state, isShown: false }
    default:
      return state;
  }
};

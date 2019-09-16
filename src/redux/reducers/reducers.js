import * as types from '../actionTypes';

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
    default:
      return state;
  }
};

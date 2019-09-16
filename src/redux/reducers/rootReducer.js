import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { locationsReducer } from './locationsReducer'

const rootReducer = combineReducers({
  locations: locationsReducer,
  newLocation: reducers.addLocationReducer,
  maps: reducers.mapsReducer,
  location: reducers.singleLocaReducer,
  activeLocation: reducers.activeLocation,
  auth: reducers.authReducer,
  verifyEmail: reducers.verifyEmailReducer,
  resetPassword: reducers.resetPasswordReducer,
  addReview: reducers.addReviewReducer
});

export default rootReducer;

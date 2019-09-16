import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { locationsReducer } from './locationsReducer'
import { singleLocationReducer } from './singleLocationReducer'

const rootReducer = combineReducers({
  locations: locationsReducer,
  newLocation: reducers.addLocationReducer,
  maps: reducers.mapsReducer,
  location: singleLocationReducer,
  activeLocation: reducers.activeLocation,
  auth: reducers.authReducer,
  verifyEmail: reducers.verifyEmailReducer,
  resetPassword: reducers.resetPasswordReducer,
  addReview: reducers.addReviewReducer
});

export default rootReducer;

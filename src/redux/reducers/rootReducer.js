import { combineReducers } from 'redux'
import * as reducers from './reducers'

const rootReducer = combineReducers({
  locations: reducers.locationReducer,
  maps: reducers.mapsReducer,
  location: reducers.singleLocaReducer,
  activeLocation: reducers.activeLocation,
  auth: reducers.authReducer,
  verifyEmail: reducers.verifyEmailReducer,
  resetPassword: reducers.resetPasswordReducer,
  addReview: reducers.addReviewReducer
});

export default rootReducer;
import { combineReducers } from 'redux';
import * as reducers from './reducers';
import { locationsReducer } from './locationsReducer'
import { singleLocationReducer } from './singleLocationReducer'
import { mapsReducer } from './mapsReducer'
import { activeLocationReducer } from './activeLocationReducer'
import { authReducer } from './authReducer'
import { resetPasswordReducer } from './resetPasswordReducer'
import { addReviewReducer } from './addReviewReducer'

const rootReducer = combineReducers({
  locations: locationsReducer,
  newLocation: reducers.addLocationReducer,
  maps: mapsReducer,
  location: singleLocationReducer,
  activeLocation: activeLocationReducer,
  auth: authReducer,
  resetPassword: resetPasswordReducer,
  addReview: addReviewReducer
});

export default rootReducer;

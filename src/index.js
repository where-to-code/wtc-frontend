import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import App from './App';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../src/redux/reducers';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

dotenv.config();

const combinedReducer = combineReducers({
  locations: reducers.locationReducer,
  maps: reducers.mapsReducer,
  location: reducers.singleLocaReducer,
  activeLocation: reducers.activeLocation,
  auth: reducers.authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combinedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();

import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import * as reducers from '../src/redux/reducers'
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import * as serviceWorker from './serviceWorker';

dotenv.config();

const combinedReducer = combineReducers({
  location: reducers.locationReducer,
  maps: reducers.mapsReducer
});
const store = createStore(
  combinedReducer,
  {},
  compose(
    applyMiddleware(thunk),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

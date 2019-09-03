import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as reducers from '../src/redux/reducers';

const initialState = {
  loading: false,
  locations: reducers.locationReducer,
  maps: reducers.mapsReducer,
  location: reducers.singleLocaReducer,
  activeLocation: reducers.activeLocation,
  auth: reducers.authReducer
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={configureMockStore()(initialState)}>
      <Router>
        <App />
      </Router>
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import * as reducers from '../src/redux/reducers/reducers';

const initialState = {
  loading: false,
  locations: reducers.locationReducer,
  newLocation: reducers.addLocationReducer,
  maps: reducers.mapsReducer,
  location: reducers.singleLocaReducer,
  activeLocation: reducers.activeLocation,
  verifyEmail: reducers.verifyEmailReducer,
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

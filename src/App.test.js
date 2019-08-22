import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureMockStore from 'redux-mock-store';

import * as reducers from '../src/redux/reducers'
import App from './App';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
const initialState = {
  loading: false
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={configureMockStore()(initialState)}>
      <App />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import {createStore} from 'redux';
import {locationReducer} from './redux/reducers'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={createStore(locationReducer)}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

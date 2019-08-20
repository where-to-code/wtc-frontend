import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import configureMockStore from 'redux-mock-store';
const initialState ={
  loading:false
}
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={configureMockStore()(initialState)}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

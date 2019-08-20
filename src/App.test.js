import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "react-redux";
import configureMockStore from 'redux-mock-store';
const initialState ={
  loading:false
}
const Provide =jest.genMockFromModule('react-redux');
const Provider = Provide.Provider
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={configureMockStore()(initialState)}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

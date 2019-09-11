import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers/rootReducer';

export const renderWithRedux = (
  ui,
  {
    initialState,
    store = createStore(
      rootReducer,
      initialState || compose(applyMiddleware(thunk))
    )
  } = {}
) => {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store
  };
};

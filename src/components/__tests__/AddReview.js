import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { renderWithRedux } from '../../utils/testHelpers'
import AddReview from '../AddReview';

jest.mock('react-loader-spinner', () => () => <div>Loader Mock</div>)

afterEach(cleanup);
describe('Add Reviews tests', () => {
  it('Render without crashing', async () => {
    await renderWithRedux(<AddReview />);
  });
  it('render the loader while loading', async () => {
    const reducer = {
      addReview: {
        loading: true,
      },
      auth: {
        userId: 1
      }
    }
    const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
    const { getByText } = await renderWithRedux(<AddReview />, { store });
    expect(getByText('Loader Mock')).toBeTruthy()
  })
  it('prevents default on user submit', async () => {
    const reducer = {
      addReview: {
        isShown: false,
        review: {
          quietness: null,
          wifi_speed: null,
          community: null,
          accessibility: null,
          description: '',
          user_id: null,
        },
        loading: false
      },
      auth: {
        userId: 1,
      }
    }
    const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
    global.window = { location: { pathname: null } };
    const { getByText } = await renderWithRedux(<AddReview />, { store });
    fireEvent.click(getByText('Add Review'));
    expect(global.window.location.pathname).toEqual('/');
  })
  it('display an error message if some field is not present', async () => {
    const reducer = {
      addReview: {
        isShown: false,
        review: {
          quietness: null,
          wifi_speed: null,
          community: null,
          accessibility: null,
          description: '',
          user_id: null,
        },
        loading: false
      },
      auth: {
        userId: 1,
      }
    }
    const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
    global.window = { location: { pathname: null } };
    const { getByText } = await renderWithRedux(<AddReview />, { store });
    fireEvent.click(getByText('Add Review'));
    expect(getByText('All fields are required.')).toBeTruthy()
  })
});
it('display a message if the user is not logged in', async () => {
  const { getByText } = await renderWithRedux(<AddReview />);
  expect(getByText('You must login first')).toBeTruthy()
})
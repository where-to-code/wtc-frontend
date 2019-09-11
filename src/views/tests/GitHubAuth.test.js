import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import GitHubAuth from '../GitHubAuth';

jest.mock('react-loader-spinner', () => () => <div>Loader Mock</div>)

afterEach(cleanup);
describe('Registartion tests', () => {
    it('render without crashing', () => {
        const mainRoute = '/gitAuth'
        renderWithRedux(<TestingRouter ComponentWithRedirection={props => <GitHubAuth {...props} />} MainRoute={mainRoute} />, {}, { route: '/gitAuth?code=1' });
    })
    it('render the loader while loading', () => {
        const mainRoute = '/gitAuth'
        const { getByText } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <GitHubAuth {...props} />} MainRoute={mainRoute} />, {}, { route: '/gitAuth?code=1' });
        expect(getByText('Loader Mock')).toBeTruthy()
    })
    // todo test the component after the request to the server is done
})
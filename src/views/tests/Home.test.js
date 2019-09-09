import React from 'react';
import { cleanup, fireEvent, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import Home from '../Home';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

jest.mock('../../components/Header', () => () => <div>Header Mock</div>);

afterEach(cleanup);
describe('Search Page tests', () => {
    it('render without crashing', () => {
        renderWithRedux(<Home />);
    })
    it('render the Header component', () => {
        const { getByText } = renderWithRedux(<Home />)
        expect(getByText('Header Mock')).toBeTruthy();
    })
    it('redirect to /locations if button is clicked', () => {
        const redirectUrl = '/locations'
        const { getByText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={() => <Home />} RedirectUrl={redirectUrl} />)
        fireEvent.click(getByText('Find places near you'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
          )
    })
})
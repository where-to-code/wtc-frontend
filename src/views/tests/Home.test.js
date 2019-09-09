import React from 'react';
import { cleanup, fireEvent, getByPlaceholderText, } from '@testing-library/react';
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
    it('push to /locations if button is clicked', () => {
        const redirectUrl = '/locations'
        const { getByText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={() => <Home />} RedirectUrl={redirectUrl} />)
        fireEvent.click(getByText('Find places near you'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
          )
    })
    it('push to /locations on autocomplete', () => {
        const redirectUrl = '/locations'
        const { getByPlaceholderText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={() => <Home />} RedirectUrl={redirectUrl} />)
        fireEvent.change(getByPlaceholderText('Search and select a place'), {target: {value: 'London, UK'}})
        fireEvent.keyPress(getByPlaceholderText('Search and select a place'), { key: 'Enter', code: 13, charCode: 13 })
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
          )
    })
})
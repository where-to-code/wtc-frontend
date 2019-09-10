import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import Home from '../Home';

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
        const mainRoute ='/'
        const { getByText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Home {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />)
        fireEvent.click(getByText('Find places near you'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
          )
    })

    // Todo find a way to test when a user use the autocomplete function
    // Problem with it is that a new div is attacched to the body but I can't find a way to reference it from here
    // it('push to /locations on autocomplete', () => {
    //     const redirectUrl = '/locations'
    //     const { getByPlaceholderText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={() => <Home />} RedirectUrl={redirectUrl} />)
    //     fireEvent.change(getByPlaceholderText('Search and select a place'), {target: {value: 'London, UK'}})
    // Here we need to find a way to reference to an item in the div attached to the body from google autocomplete and click on it
    //     expect(container.innerHTML).toEqual(
    //         expect.stringContaining(redirectUrl)
    //       )
    // })
})
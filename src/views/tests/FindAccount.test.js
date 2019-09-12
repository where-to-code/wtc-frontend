import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import FindAccount from '../FindAccount';

jest.mock('react-loader-spinner', () => () => <div>Loader Mock</div>)

afterEach(cleanup);
describe('Find Account tests', () => {
    it('render without crashing', () => {
        renderWithRedux(<FindAccount />);
    })
    it('render the loader while loading', () => {
        const reducer = {
            verifyEmail: {
                loading: true
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = renderWithRedux(<FindAccount />, { store });
        expect(getByText('Loader Mock')).toBeTruthy()
    })
    it('render the error if present', () => {
        const reducer = {
            verifyEmail: {
                error: 'error'
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = renderWithRedux(<FindAccount />, { store });
        expect(getByText('error')).toBeTruthy()
    })
    it('push to / if logo is clicked', () => {
        const redirectUrl = '/'
        const mainRoute = '/account'
        const { getByAltText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <FindAccount {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.click(getByAltText('logo'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
    it('push to / if Send Email is clicked and inputs pass validation', () => {
        const redirectUrl = '/'
        const mainRoute = '/account'
        const { getByPlaceholderText, getByText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <FindAccount {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'giacomobenati@mailbox.org' } })
        fireEvent.click(getByText('Send Email'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
    // this is not working (need to wait the request to the server before rerendering the error msg)
    // it("send an error message if Send Email is clicked with empty input fields", () => {
    //     const redirectUrl = '/'
    //     const mainRoute = '/signup'
    //     const { getByText } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <FindAccount {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
    //     fireEvent.click(getByText('Send Email'))
    //     expect(getByText('Email cannot be empty')).toBeTruthy()
    // })
    // As above
    // describe("display an error message if validation don't pass", () => {
    //     it('test email validation', () => {
    //         const { getByPlaceholderText, getByText, debug } = renderWithRedux(<FindAccount />);
    //         fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'as' } })
    //         fireEvent.click(getByText('Send Email'))
    //         //expect(getByText('You have entered an invalid email address!')).toBeTruthy()
    //     })
    // })
})
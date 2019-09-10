import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import Login from '../Login';

jest.mock('react-loader-spinner', () => () => <div>Loader Mock</div>)

afterEach(cleanup);
describe('Login tests', () => {
    it('render without crashing', () => {
        renderWithRedux(<Login />);
    })
    it('render the loader while loading', () => {
        const reducer = {
            auth: {
                loading: true
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = renderWithRedux(<Login />, { store });
        expect(getByText('Loader Mock')).toBeTruthy()
    })
    it('render the error if present', () => {
        const reducer = {
            auth: {
                error: 'error'
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = renderWithRedux(<Login />, { store });
        expect(getByText('error')).toBeTruthy()
    })
    it('push to / if logo is clicked', () => {
        const redirectUrl = '/'
        const mainRoute = '/login'
        const { getByAltText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.click(getByAltText('logo'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
    it('push to / if login is clicked and inputs pass validation', () => {
        const redirectUrl = '/'
        const mainRoute = '/login'
        const { getByPlaceholderText, getByText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'giacomo' } })
        fireEvent.change(getByPlaceholderText('Last Name'), { target: { value: 'benati' } })
        fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'giacomobenati@mailbox.org' } })
        fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'giacomo1' } })
        fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'giacomo1' } })
        fireEvent.click(getByText('Sign Up'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
    // it("does anything if signup is clicked and inputs don't pass validation", () => {
    //     const redirectUrl = '/'
    //     const mainRoute = '/signup'
    //     const { getByPlaceholderText, getByDisplayValue, getByText } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
    //     fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'giacomo' } })
    //     fireEvent.change(getByPlaceholderText('Last Name'), { target: { value: 'benati' } })
    //     fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'giacomobenati@mailbox.org' } })
    //     fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'giacomo1' } })
    //     fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'giacomo2' } })
    //     fireEvent.click(getByText('Sign Up'))
    //     expect(getByDisplayValue('giacomobenati@mailbox.org')).toBeTruthy()
    // })
    // describe("display an error message if validation don't pass", () => {
    //     it('test first name validation', () => {
    //         const { getByPlaceholderText, getByText } = renderWithRedux(<Login />);
    //         fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'a' } })
    //         expect(getByText('Must be above 2 characters and alphabet alone.')).toBeTruthy()
    //         fireEvent.change(getByPlaceholderText('First Name'), { target: { value: 'giacomo3' } })
    //         expect(getByText('Must be above 2 characters and alphabet alone.')).toBeTruthy()
    //     })
    //     it('test last name validation', () => {
    //         const { getByPlaceholderText, getByText } = renderWithRedux(<Login />);
    //         fireEvent.change(getByPlaceholderText('Last Name'), { target: { value: 'a' } })
    //         expect(getByText('Must be above 2 characters and alphabet alone.')).toBeTruthy()
    //         fireEvent.change(getByPlaceholderText('Last Name'), { target: { value: 'giacomo3' } })
    //         expect(getByText('Must be above 2 characters and alphabet alone.')).toBeTruthy()
    //     })
    //     it('test email validation', () => {
    //         const { getByPlaceholderText, getByText } = renderWithRedux(<Login />);
    //         fireEvent.change(getByPlaceholderText('Email'), { target: { value: 'a@a' } })
    //         expect(getByText('You have entered an invalid email address!')).toBeTruthy()
    //     })
    //     it('test password validation', () => {
    //         const { getByPlaceholderText, getByText } = renderWithRedux(<Login />);
    //         fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'a@a' } })
    //         expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
    //         fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'a@aasdasdasdasdasdasdasdasdasd' } })
    //         expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
    //         fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'aasdasdasd' } })
    //         expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
    //     })
    //     it('test confirm password validation', () => {
    //         const { getByPlaceholderText, getByText } = renderWithRedux(<Login />);
    //         fireEvent.change(getByPlaceholderText('Password'), { target: { value: 'giacomo1' } })
    //         fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'giacomo2' } })
    //         expect(getByText('Does not match the password.')).toBeTruthy()
    //     })
    // })
})
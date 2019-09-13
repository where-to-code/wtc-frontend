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
    it('render without crashing', async() => {
        await renderWithRedux(<Login />);
    })
    it('render the loader while loading', async() => {
        const reducer = {
            auth: {
                loading: true
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = await renderWithRedux(<Login />, { store });
        expect(getByText('Loader Mock')).toBeTruthy()
    })
    it('render the error if present', async() => {
        const reducer = {
            auth: {
                loginError: 'error'
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = await renderWithRedux(<Login />, { store });
        expect(getByText('error')).toBeTruthy()
    })
    it('push to / if logo is clicked', async() => {
        const redirectUrl = '/'
        const mainRoute = '/login'
        const { getByAltText, container } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.click(getByAltText('logo'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })

    // it('push to / if login is clicked and a succesful response is given', async() => {
    //    jest.spyOn(authHelpers ,'setTempCookie').mockResolvedValue({success:true})
    //     const redirectUrl = '/'
    //     const mainRoute = '/login'
    //     const { getByPlaceholderText, getByText, container } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
    //     fireEvent.change(getByPlaceholderText('Enter Email'), { target: { value: 'giacomobenati@mailbox.org' } })
    //     fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'giacomo1' } })
    //     fireEvent.click(getByText('Login'))
    //     expect(container.innerHTML).toEqual(
    //         expect.stringContaining(redirectUrl)
    //     )
    // })

    it("return an error if login is clicked while missing fields", async() => {
        const redirectUrl = '/'
        const mainRoute = '/login'
        const { getByPlaceholderText, getByText } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.change(getByPlaceholderText('Enter Email'), { target: { value: 'giacomobenati@mailbox.org' } })
        fireEvent.click(getByText('Login'))
        expect(getByText('All fields are required.')).toBeTruthy()
    })
    it('push to /signup if Sign Up is clicked', async() => {
        const redirectUrl = '/signup'
        const mainRoute = '/login'
        const { getByText, container } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.click(getByText('Sign Up'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
    it('push to /account if Forgot Password? is clicked', async() => {
        const redirectUrl = '/account'
        const mainRoute = '/login'
        const { getByText, container } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Login {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.click(getByText('Forgot password?'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
    describe("display an error message if validation don't pass", () => {    
        it('test email validation', async() => {
            const { getByPlaceholderText, getByText } = await renderWithRedux(<Login />);
            fireEvent.change(getByPlaceholderText('Enter Email'), { target: { value: 'a@a' } })
            expect(getByText('You have entered an invalid email address!')).toBeTruthy()
        })
        it('test password validation', async() => {
            const { getByPlaceholderText, getByText } = await renderWithRedux(<Login />);
            fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'a@a' } })
            expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
            fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'a@aasdasdasdasdasdasdasdasdasd' } })
            expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
            fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'aasdasdasd' } })
            expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
        })
    })
})
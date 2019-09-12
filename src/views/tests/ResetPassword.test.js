import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import ResetPassword from '../ResetPassword';

jest.mock('react-loader-spinner', () => () => <div>Loader Mock</div>)

afterEach(cleanup);
describe('Reset Password tests', () => {
    it('render without crashing ', async() => {
        const mainRoute = '/reset'
        await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} MainRoute={mainRoute} />, {}, { route: '/reset?id=1' });
    })
    it('render the loader while loading', async() => {
        const reducer = {
            resetPassword: {
                loading: true
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const mainRoute = '/reset'
        const { getByText } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} MainRoute={mainRoute} />, { store }, { route: '/reset?id=1' });
        expect(getByText('Loader Mock')).toBeTruthy()
    })
    it('render the error if present', async() => {
        const reducer = {
            resetPassword: {
                error: 'error'
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const mainRoute = '/reset'
        const { getByText } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} MainRoute={mainRoute} />, { store }, { route: '/reset?id=1' });
        expect(getByText('error')).toBeTruthy()
    })
    it('push to / if logo is clicked', async() => {
        const redirectUrl = '/'
        const mainRoute = '/reset'
        const { getByAltText, container } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} MainRoute={mainRoute} />, {}, { route: '/reset?id=1' });
        fireEvent.click(getByAltText('logo'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
    it("does anything if signup is clicked and inputs don't pass validation", async() => {
        const mainRoute = '/reset'
        const { getAllByText, getByPlaceholderText, getByDisplayValue } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} MainRoute={mainRoute} />, {}, { route: '/reset?id=1' });
        fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'giacomo1' } })
        fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'giacomo2' } })
        fireEvent.click(getAllByText('Reset Password')[1])
        expect(getByDisplayValue('giacomo1')).toBeTruthy()
    })
    // not working don't know why (it seems we can't reach history.push)
    // it('push to / if ResetPassword is clicked and a succesful response is given', () => {
    //     const redirectUrl = '/login'
    //     const mainRoute = '/reset'
    //     const { getByPlaceholderText, getAllByText, container } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: '/reset?id=500' })
    //     fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'giacomo1' } })
    //     fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'giacomo1' } })
    //     fireEvent.click(getAllByText('Reset Password')[1])
    //     expect(container.innerHTML).toEqual(
    //         expect.stringContaining(redirectUrl)
    //     )
    // })
    describe("display an error message if validation don't pass", () => {
        it('test password validation', () => {
            const mainRoute = '/reset'
            const { getByText, getByPlaceholderText } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} MainRoute={mainRoute} />, {}, { route: '/reset?id=1' });
            fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'a@a' } })
            expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
            fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'a@aasdasdasdasdasdasdasdasdasd' } })
            expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
            fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'aasdasdasd' } })
            expect(getByText('Must be between 6 and 15 characters and contain a number.')).toBeTruthy()
        })
        it('test password validation', () => {
            const mainRoute = '/reset'
            const { getByText, getByPlaceholderText } = renderWithRedux(<TestingRouter ComponentWithRedirection={props => <ResetPassword {...props} />} MainRoute={mainRoute} />, {}, { route: '/reset?id=1' });
            fireEvent.change(getByPlaceholderText('Enter Password'), { target: { value: 'giacomo1' } })
            fireEvent.change(getByPlaceholderText('Confirm Password'), { target: { value: 'giacomo2' } })
            expect(getByText('Password does not match.')).toBeTruthy()
        })
    })
})
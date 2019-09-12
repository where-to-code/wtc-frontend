import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import EmailConfirmationMessage from '../EmailConfirmationMessage';

jest.mock('../../components/Header', () => () => <div>Header Mock</div>);

afterEach(cleanup);
describe('Email Confirmation Message tests', () => {
    it('render without crashing', async() => {
        await renderWithRedux(<EmailConfirmationMessage />);
    })    
    it('render the Header component', async() => {
        const { getByText } = await renderWithRedux(<EmailConfirmationMessage />)
        expect(getByText('Header Mock')).toBeTruthy();
    })
    it('push to / if Continue To Homepage is clicked', async() => {
        const redirectUrl = '/'
        const mainRoute = '/email-message'
        const { getByText, container } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <EmailConfirmationMessage {...props} />} RedirectUrl={redirectUrl} MainRoute={mainRoute} />, {}, { route: mainRoute })
        fireEvent.click(getByText('Continue to homepage'))
        expect(container.innerHTML).toEqual(
            expect.stringContaining(redirectUrl)
        )
    })
})
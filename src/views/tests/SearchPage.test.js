import React from 'react';
import { cleanup, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux, mockedState } from '../../utils/testHelpers';
import SearchPage from '../SearchPage';


const initialState = mockedState;
jest.mock('../../components/Header', () => () => 'Header Mock');
jest.mock('../../components/FilterPane', () => ({ toggle = false }) => toggle ? 'FilterPane Mock hidden' : 'FilterPane Mock shown')

afterEach(cleanup);
describe('Search Page tests', () => {
    it('render without crashing', () => {
        renderWithRedux(<SearchPage />)
    })
    it('render the loader while the locations are loading', () => {
        const { debug } = renderWithRedux(<SearchPage />)
        console.log(initialState)
        debug()
    })
})
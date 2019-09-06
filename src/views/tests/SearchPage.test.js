import React from 'react';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../utils/testHelpers';
import SearchPage from '../SearchPage'

afterEach(cleanup);
describe('Search Page tests', () => {
    it('render without crashing', () => {
        renderWithRedux(<SearchPage/>)
    })
    
})
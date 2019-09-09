import React from 'react';
import { cleanup, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux } from '../../utils/testHelpers';
import SearchPage from '../SearchPage';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';



jest.mock('../../components/Header', () => () => <div>Header Mock</div>);
jest.mock('../../components/FilterPane', () => () => <div>FilterPane Mock</div>)
jest.mock('react-loader-spinner', () => () => <div>Loader Mock</div>)
jest.mock('../../components/Map', () => () => <div>Map Mock</div>)
jest.mock('../../components/CardContainer', () => () => <div>Card Container Mock</div>)
jest.mock('../../components/NoGeoLocation', () => () => <div>No Geo Location Mock</div>)
jest.mock('../../components/LocationErr', () => () => <div>LocationErr Mock</div>)


afterEach(cleanup);
describe('Search Page tests', () => {
    it('render without crashing', () => {
        renderWithRedux(<SearchPage />);
    })
    it('render the Header component', () => {
        const { getByText } = renderWithRedux(<SearchPage />)
        expect(getByText('Header Mock')).toBeTruthy();
    })
    it('render the FilterPane component', () => {
        const { getByText } = renderWithRedux(<SearchPage />)
        expect(getByText('FilterPane Mock')).toBeTruthy();
    })
    // it('render the noGeolocation component if user is not geolocated', () => {
    //     const reducer = {
    //         locations: {
    //             locations: []
    //         },
    //         maps: {
    //             geolocation: null,
    //         }
    //     }
    //     const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
    //     const { getByText } = renderWithRedux(<SearchPage />, { store })
    //     expect(getByText('No Geo Location Mock')).toBeTruthy();
    // })
    it('render the loader while the locations are loading', () => {
        const reducer = {
            locations: {
                loadingLocation: true,
            },
            maps: {
                geolocation: null,
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = renderWithRedux(<SearchPage />, { store })
        expect(getByText('Loader Mock')).toBeTruthy();
    })
    it('render the LocationErr component if there is an error', () => {
        const reducer = {
            locations: {
                error: true,
            },
            maps: {
                geolocation: null,
            }
        }
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = renderWithRedux(<SearchPage />, { store })
        expect(getByText('LocationErr Mock')).toBeTruthy();
    })
    it('render the CardContainer component', () => {
        const { getByText } = renderWithRedux(<SearchPage />)
        expect(getByText('Card Container Mock')).toBeTruthy();
    })
    it('render the Map component', () => {
        const { getByText } = renderWithRedux(<SearchPage />)
        expect(getByText('Map Mock')).toBeTruthy();
    })
    
})
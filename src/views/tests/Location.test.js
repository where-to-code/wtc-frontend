import React from 'react';
import { cleanup, fireEvent, getByPlaceholderText, } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithRedux, TestingRouter } from '../../utils/testHelpers';
import Location from '../Location';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

jest.mock('../../components/Header', () => () => <div>Header Mock</div>);
jest.mock('react-loader-spinner', () => () => <div>Loader Mock</div>);
jest.mock('../../components/ReviewContainer', () => () => <div>Review Container Mock</div>);
jest.mock('../../components/LocationBanner', () => () => <div>Location Banner Mock</div>);
jest.mock('../../components/AverageRatings', () => () => <div>Avarage Rating Mock</div>);
jest.mock('../../components/MapIFrame', () => () => <div>Map IFrame Mock</div>);
const reducer = {
    location: {
        location: {
            "id": 1,
            "name": "Croydon - Whitgift Centre - Lower",
            "description": "A Starbucks shop to work out from",
            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN7aBKuIsNaZaqBosrlp3oz3ziEmI2dhtzTdijGrcmwWIYSBQs",
            "address": "Whitgift Centre, Cafe Kiosk, Centrale Shopping Centre, Croydon",
            "longitude": "-0.1",
            "latitude": "51.38",
            "created_at": "2019-08-30T09:19:13.920Z",
            "averageRating": 1,
            "reviews": [
                {
                    "id": 1,
                    "quietness": 5,
                    "wifi_speed": 3,
                    "close_late": 3,
                    "community": 3,
                    "accessibility": 1,
                    "description": "This hotel is awesome! It was superb and clean! Incredible staff and Can You Do My Homework - DoMyAssignmentForMe accommodating to us. We will visit and remain at this inn many occasions over. So cheerful to have discovered this gem in the ideal area!",
                    "user_id": 3
                },
                {
                    "id": 2,
                    "quietness": 2,
                    "wifi_speed": 4,
                    "close_late": 2,
                    "community": 4,
                    "accessibility": 5,
                    "description": "We've had the opportunity to work in several locations owned by the Yard, and we've been very happy with both. The team is great -- they're been very accommodating to our particular space needs, they're always offering members the opportunity to engage and interact, and frankly, they're just very nice people! The Yard had provided value and flexibility at each stage of our company's growth.",
                    "user_id": 1
                },
                {
                    "id": 3,
                    "quietness": 1,
                    "wifi_speed": 5,
                    "close_late": 2,
                    "community": 1,
                    "accessibility": 4,
                    "description": "We had a rough time at the Yard Flatiron North. While we were there the air conditioning was broken multiple times, as was the elevator. In addition, they allow companies to run public facing businesses out their space, so anyone can just be wandering around the space unattended. Lastly, all of the doors are unlocked during business hours so anyone from the street can just come up to each floor and use the bathroom or kitchen. Women at front desk were nice, but lack of investment and systems meant the overall experience was pretty bad.",
                    "user_id": 4
                },
                {
                    "id": 4,
                    "quietness": 5,
                    "wifi_speed": 5,
                    "close_late": 5,
                    "community": 3,
                    "accessibility": 1,
                    "description": "We had a rough time at the Yard Flatiron North. While we were there the air conditioning was broken multiple times, as was the elevator. In addition, they allow companies to run public facing businesses out their space, so anyone can just be wandering around the space unattended. Lastly, all of the doors are unlocked during business hours so anyone from the street can just come up to each floor and use the bathroom or kitchen. Women at front desk were nice, but lack of investment and systems meant the overall experience was pretty bad.",
                    "user_id": 4
                },
                {
                    "id": 5,
                    "quietness": 4,
                    "wifi_speed": 5,
                    "close_late": 2,
                    "community": 1,
                    "accessibility": 3,
                    "description": "This hotel is awesome! It was superb and clean! Incredible staff and Can You Do My Homework - DoMyAssignmentForMe accommodating to us. We will visit and remain at this inn many occasions over. So cheerful to have discovered this gem in the ideal area!",
                    "user_id": 2
                }
            ]
        },
    }
}
expect()
afterEach(cleanup);
describe('Location tests', () => {
    it('render without crashing (with or without location in the store)', async() => {
        const mainRoute = '/location/1'
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Location {...props} />} MainRoute={mainRoute} />, { store }, { route: mainRoute });
        await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Location {...props} />} MainRoute={mainRoute} />, {}, { route: mainRoute });
    })
    it('render the loader without location in the store', async() => {
        const mainRoute = '/location/1'
        const { getByText } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Location {...props} />} MainRoute={mainRoute} />, {}, { route: mainRoute });
        expect(getByText('Loader Mock')).toBeTruthy();
    })
    it('render every component with location in the store', async() => {
        const mainRoute = '/location/1'
        const store = createStore(() => reducer, compose(applyMiddleware(thunk)))
        const { getByText } = await renderWithRedux(<TestingRouter ComponentWithRedirection={props => <Location {...props} />} MainRoute={mainRoute} />, { store }, { route: mainRoute });
        expect(getByText('Header Mock')).toBeTruthy();
        expect(getByText('Review Container Mock')).toBeTruthy();
        expect(getByText('Location Banner Mock')).toBeTruthy();
        expect(getByText('Avarage Rating Mock')).toBeTruthy();
        expect(getByText('Map IFrame Mock')).toBeTruthy();
    })
})
import * as actions from '../mapsActionCreators'
import * as types from '../../actionTypes'
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('maps action creators', () => {
    describe('fetch maps', () => {
        it('mapsSuccess', () => {
          expect(actions.mapsSucces({})).toBeTruthy();
        });
        it('mapsFailure', () => {
          const error = 'There was an error';
          const expectedAction = {
            type: types.FETCH_MAP_API_FAILURE,
            payload: error,
          };
          expect(actions.mapsSucces({})).not.toEqual(expectedAction);
          expect(actions.mapsFailure(error)).toEqual(expectedAction);
        });
        it('should get maps', async () => {
          const expectedActions = [{ type: types.LOADING_MAP_API }];
          const store = mockStore({ maps: [] });
          await store.dispatch(actions.mapsLoading());
          const results = await store.getActions();
          expect(results).toEqual(expectedActions);
        });
        it('should fail', async () => {
          const expectedActions = [
            {
              type: types.FETCH_MAP_API_FAILURE,
              payload: 'fail to load',
            },
          ];
          const store = mockStore({ maps: [] });
          await store.dispatch(actions.mapsFailure('fail to load'));
          const results = await store.getActions();
          expect(results).toEqual(expectedActions);
        });
      });
      
      describe('geolocation', () => {
        it('set geolocation true', () => {
          const expectedAction = {
            type: types.SET_GEOLOCATION_TRUE,
          };
          expect(actions.setGeolocationTrue()).toEqual(expectedAction);
        });
        it('set geolocation false', () => {
          const expectedAction = {
            type: types.SET_GEOLOCATION_FALSE,
          };
          expect(actions.setGeolocationFalse()).toEqual(expectedAction);
        });
        it('set geolocation value', () => {
          const location = {
            latitude: 0.33555,
            longitude: 54.3322,
          };
          const expectedAction = {
            type: types.SET_GEOLOCATION_VALUE,
            payload: location,
          };
          expect(actions.setGeolocationValue(location)).toEqual(expectedAction);
        });
      });
})
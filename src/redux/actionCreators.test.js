import * as actions from './actionCreators';
import * as types from './actionTypes';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

describe('fetch locations', () => {
  afterEach(() => {
    fetchMock.restore()
  })
    const locations=[{
        id:1,
        description:'123 Arizona road',
        name: "Ariz Coffee Shop",
        longitude:'0.999923',
        latitude:'0.273444'
    }]
    it('location_success', () => {
      const expectedAction = {
        type: types.FETCH_LOCATIONS_SUCCESS,
        payload:locations
      }
      expect(actions.locationSuccess(locations)).toEqual(expectedAction)
    })
    it('location_failure',() => {
      const error = 'There was an error';
      const expectedAction = {
        type: types.FETCH_LOCATIONS_FAILURE,
        payload:error
      }
      expect(actions.locationSuccess(locations)).not.toEqual(expectedAction)
      expect(actions.locationFailure(error)).toEqual(expectedAction)
    })
    it('location_loading success',()=>{
      fetchMock.getOnce('/locations')

    })
    it('location_loading failure',() => {})
  })
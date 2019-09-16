import * as actions from '../activeLocationActionCreators'
import * as types from '../../actionTypes'

describe('Active locations', () => {
    const location = {
      data: {
        id: 1,
        description: '123 Arizona road',
        name: 'Ariz Coffee Shop',
        image_url: 'image',
        address: 'some address',
        longitude: '0.999923',
        latitude: '0.273444',
        created_at: '',
      },
    };
    it('set active', () => {
      const expectedAction = {
        type: types.SET_ACTIVE,
        payload: location.data,
      };
      expect(actions.setActive(location.data)).toEqual(expectedAction);
    });
    it('clear active', () => {
      const expectedAction = {
        type: types.CLEAR_ACTIVE,
      };
      expect(actions.clearActive()).toEqual(expectedAction);
    });
  });
import * as types from './actionTypes';
import axios from 'axios';
let url;
export const locationSuccess = locationList => ({
    type: types.FETCH_LOCATIONS_SUCCESS,
    payload: locationList,
})

export const locationFailure = error => ({
    type: types.FETCH_LOCATIONS_FAILURE,
    payload: error,
})

export const locationLoads = () => async dispatch => {
    dispatch({type: types.LOADING_LOCATIONS})
    try {
        const locationsInfo = await axios.get(`${url}/locations`)
        dispatch(locationSuccess(locationsInfo.data))
    }
    catch(error) {
        dispatch(locationFailure(error.message));
    }
}

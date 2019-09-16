import * as types from '../actionTypes';
import { mapPromise } from '../helpers';

export const mapsSucces = () => ({
    type: types.FETCH_MAP_API_SUCCESS,
});
export const mapsFailure = error => ({
    type: types.FETCH_MAP_API_FAILURE,
    payload: error,
});

export const mapsLoading = () => async dispatch => {
    dispatch({ type: types.LOADING_MAP_API });
    try {
        // We import the Promise from helpers here
        Promise.all([mapPromise]).then(value => {
            dispatch(mapsSucces(value[0].maps));
        });
    } catch (error) {
        const errorValue = error.response.data
            ? error.response.data.message
            : error.message;
        dispatch(mapsFailure(errorValue));
    }
};

export const setGeolocationTrue = () => ({
    type: types.SET_GEOLOCATION_TRUE,
});

export const setGeolocationFalse = () => ({
    type: types.SET_GEOLOCATION_FALSE,
});

export const setGeolocationValue = geolocation => ({
    type: types.SET_GEOLOCATION_VALUE,
    payload: geolocation,
});

import * as types from '../actionTypes';
import axios from 'axios';

const url = 'https://where2code.herokuapp.com/api';

export const singleLocSuccess = locationList => ({
  type: types.FETCH_SINGLE_LOCATIONS_SUCCESS,
  payload: locationList,
});

export const singleLocFailure = error => ({
  type: types.FETCH_SINGLE_LOCATIONS_FAILURE,
  payload: error,
});

export const fetchSingleLocation = locId => async dispatch => {
  dispatch({ type: types.LOADING_SINGLE_LOCATION });
  try {
    const locationInfo = await axios.get(`${url}/locations/${locId}`);
    let googleRating;
    if(locationInfo.data.data.place_id){
      googleRating = await axios.get( `https://cors-wahala.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?placeid=${locationInfo.data.data.place_id}&fields=rating&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)
    }
    else{
      googleRating={
        data:{
          result:{
            rating:''
          }
        }
      }
    }
    const locationData = {
      ...locationInfo.data.data,
      averageRating:
        locationInfo.data.data.averageRating || googleRating.data.result.rating || "There aren't reviews for this location yet",
      isGoogleRating: googleRating.data.result.rating ? true:false
    };
    dispatch(singleLocSuccess(locationData));
  } catch (error) {
    const errorValue = error.response
      ? error.response.data.message
      : error.message;
    dispatch(singleLocFailure(errorValue));
  }
};
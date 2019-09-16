import * as types from '../actionTypes';
import axios from 'axios';
import { fetchSingleLocation } from './singleLocationActionCreators'

const url = 'https://where2code.herokuapp.com/api';

export const setAddReviewTrue = () => ({
  type: types.SET_ADD_REVIEW_TRUE
})
export const setAddReviewFalse = () => ({
  type: types.SET_ADD_REVIEW_FALSE
})
export const addRatingValue = review => ({
  type: types.ADD_RATING_VALUE,
  payload: review
})
export const clearReview = () => ({
  type: types.CLEAR_REVIEW
})
export const addReviewSuccess = () => ({
  type: types.ADD_REVIEW_SUCCESS
})
export const addReviewFailure = error => ({
  type: types.ADD_REVIEW_FAILURE,
  payload: error
})
export const addReviewLoad = () => ({
  type: types.ADD_REVIEW_LOAD
})
export const addReview = (review, locId) => async dispatch => {
  dispatch(addReviewLoad())
  try {
    await axios.post(`${url}/locations/${locId}/review`, review);
    dispatch(fetchSingleLocation(locId))
    dispatch(addReviewSuccess())
  }
  catch (error) {
    dispatch(addReviewFailure(error.message))
  }
}
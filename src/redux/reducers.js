import * as types from './actionTypes';

export const locationReducer = (
    state ={loadingLocation: false,locations:[],error:null},
    action) =>{
        switch(action.type){
            case types.LOADING_LOCATIONS:
                return {...state, loadingLocation:true}
            case types.FETCH_LOCATIONS_SUCCESS:
                return {...state ,loadingLocation:false, locations:action.payload }
            case types.FETCH_LOCATIONS_FAILURE:
                return {...state,loadingLocation:false, error:action.payload}
            default:
                return state
        }
    }
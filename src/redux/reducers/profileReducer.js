import {profileAPI} from '../../api/api'
import { stopSubmit } from 'redux-form';

const SETUSER = 'SETUSER';
const SETISFETCHING = 'SETISFETCHING';
const SETSTATUS = 'SETSTATUS';
const SETPHOTO = 'SETPHOTO';


const initialState = {
    profile: [],
    isFetching: true,
    status: ''
}

export const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SETUSER: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SETISFETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SETSTATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SETPHOTO: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default: {
            return state;
        }
    }
}

export const getUser = (profile) => {
    return {
        type: SETUSER,
        profile
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: SETISFETCHING,
        isFetching
    }
}
export const setStatus = (status) => {
    return {
        type: SETSTATUS,
        status
    }
}
const setUploadPhoto = (photos) => {
    return {
        type:SETPHOTO,
        photos
    }
}

export const getProfile = (id) => (dispatch) => {
    dispatch(setIsFetching(true))
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(getUser(data));
            dispatch(setIsFetching(false))
        })
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
    .then(res=> {
        dispatch(setStatus(res))
    })
}

export const changeStatus = (status) => (dispatch) => {
    profileAPI.changeStatus(status)
    .then(res=> {
        if(res.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export const changePhoto = (photoFile) => async (dispatch) => {
    let response = await profileAPI.uploadPhoto(photoFile);
    if(response.data.resultCode === 0) {
        dispatch(setUploadPhoto(response.data.data.photos))
    }   
}
export const updateProfile = (data, id) => async (dispatch) => {

    const response = await profileAPI.updateProfile(data);
     if(response.data.resultCode === 1) {
        dispatch(stopSubmit('editDescr', {"instagram": 'error'}))
    }
    // if(response.data.resultCode === 0) {
    //     dispatch(getProfile(id))
    // } else
}
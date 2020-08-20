import {profileAPI} from '../../api/api'
import { stopSubmit } from 'redux-form';
import { PhotosType, ContactsType } from './types';

const SETUSER = 'SETUSER';
const SETISFETCHING = 'SETISFETCHING';
const SETSTATUS = 'SETSTATUS';
const SETPHOTO = 'SETPHOTO';

type ProfileType = {
    userId : number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
}
const initialState = {
    profile: null as ProfileType | null,
    isFetching: true,
    status: ''
}
type InitialStateType = typeof initialState

export const profileReducer = (state = initialState, action:any): InitialStateType => {
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
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default: {
            return state;
        }
    }
}

type SetUserType = {
    type: typeof SETUSER,
    profile: ProfileType
}
export const getUser = (profile:ProfileType):SetUserType => {
    return {
        type: SETUSER,
        profile
    }
}

type SetIsFetchType = {
    type: typeof SETISFETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching:boolean):SetIsFetchType => {
    return {
        type: SETISFETCHING,
        isFetching
    }
}

type SetStatusType = {
    type: typeof SETSTATUS,
    status: string
}
export const setStatus = (status:string):SetStatusType => {
    return {
        type: SETSTATUS,
        status
    }
}

type SetPhotoType = {
    type: typeof SETPHOTO,
    photos: PhotosType
}
const setUploadPhoto = (photos:PhotosType): SetPhotoType => {
    return {
        type:SETPHOTO,
        photos
    }
}

export const getProfile = (id:any) => (dispatch:any) => {
    dispatch(setIsFetching(true))
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(getUser(data));
            dispatch(setIsFetching(false))
        })
}

export const getStatus = (userId:any) => (dispatch:any) => {
    profileAPI.getStatus(userId)
    .then(res=> {
        dispatch(setStatus(res))
    })
}

export const changeStatus = (status:string) => (dispatch:any) => {
    profileAPI.changeStatus(status)
    .then(res=> {
        if(res.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export const changePhoto = (photoFile:any) => async (dispatch:any) => {
    let response = await profileAPI.uploadPhoto(photoFile);
    if(response.data.resultCode === 0) {
        dispatch(setUploadPhoto(response.data.data.photos))
    }   
}
export const updateProfile = (data:ContactsType, id:any) => async (dispatch:any) => {

    const response = await profileAPI.updateProfile(data);
     if(response.data.resultCode === 1) {
        dispatch(stopSubmit('editDescr', {"contacts.instagram": 'error'}))
    }
    // if(response.data.resultCode === 0) {
    //     dispatch(getProfile(id))
    // } else
}
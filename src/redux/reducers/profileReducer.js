import {profileAPI} from '../../api/api'

const SETUSER = 'SETUSER';
const SETISFETCHING = 'SETISFETCHING';
const SETSTATUS = 'SETSTATUS';


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


export const getProfile = (id) => (dispatch) => {
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(getUser(data));
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
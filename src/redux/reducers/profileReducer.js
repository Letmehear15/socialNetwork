import {profileAPI} from '../../api/api'

const SETUSER = 'SETUSER';
const SETISFETCHING = 'SETISFETCHING'

const initialState = {
    profile: [],
    isFetching: true
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

export const getProfile = (id) => (dispatch) => {
    profileAPI.getProfile(id)
        .then(data => {
            dispatch(getUser(data));
        })
}

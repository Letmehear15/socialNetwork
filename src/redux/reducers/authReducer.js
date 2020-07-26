import {authAPI} from '../../api/api'
import { stopSubmit } from 'redux-form';

const ISAUTH = 'ISAUTH';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case ISAUTH: {
            return {
                ...state,
                isAuth: action.prop,
                ...action.data,
            }
        }
        default: 
            return state
    }
}

const auth = (prop,{id, login, email}) => {
    return {
        type: ISAUTH,
        prop,
        data: {id, login, email}
    }
}

export const getAuth = () => (dispatch) => {
    authAPI.getAuth()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(auth(true, data.data));
            }
        })
}

export const login = ({email, password, isRemember}) => (dispatch) => {
    authAPI.getLogin(email, password, isRemember)
    .then(res => {
        debugger
        if(res.resultCode === 0 ) {
            dispatch(getAuth())
        } else {
            dispatch(stopSubmit('login', {_error:`${res.messages[0]}`}))
        }
    })
}

export const logout = () => (dispatch) => {
    authAPI.getLogout()
    .then(res => {
        if(res.resultCode === 0 ) {
            dispatch(auth(false,{id: null, login: null, email: null}))
        }
    })
}
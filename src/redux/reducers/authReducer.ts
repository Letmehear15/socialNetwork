import {authAPI} from '../../api/api'
import { stopSubmit } from 'redux-form';

const ISAUTH = 'ISAUTH';

const initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false
}

type InitialStateType = typeof initialState

export const authReducer = (state = initialState, action:any):InitialStateType => {
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

type AuthTypeData = {
    id:number|null, 
    login:string|null, 
    email: string|null
}
type AuthType = {
    type: typeof ISAUTH,
    prop: boolean,
    data: AuthTypeData
}

const auth = (prop:boolean,{id, login, email}:AuthTypeData):AuthType => {
    return {
        type: ISAUTH,
        prop,
        data: {id, login, email}
    }
}

export const getAuth = () => (dispatch:any) => {
    return authAPI.getAuth()
        .then(data => {
            if(data.resultCode === 0) {
                dispatch(auth(true, data.data));
            }
        })
}

type LoginPropType = {
    email: string, 
    password: string, 
    isRemember: string
}
export const login = ({email, password, isRemember}: LoginPropType) => (dispatch:any) => {
    authAPI.getLogin(email, password, isRemember)
    .then(res => {
        if(res.resultCode === 0 ) {
            dispatch(getAuth())
        } else {
            dispatch(stopSubmit('login', {_error:`${res.messages[0]}`}))
        }
    })
}

export const logout = () => (dispatch:any) => {
    authAPI.getLogout()
    .then(res => {
        if(res.resultCode === 0 ) {
            dispatch(auth(false,{id: null, login: null, email: null}))
        }
    })
}
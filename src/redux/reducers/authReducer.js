import {authAPI} from '../../api/api'

const ISAUTH = 'ISAUTH';

const initialState = {
    id:null,
    email:null,
    login:null,
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

export const auth = (prop,{id, login, email}) => {
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
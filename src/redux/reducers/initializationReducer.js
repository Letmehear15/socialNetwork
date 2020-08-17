import {getAuth} from './authReducer'

const SETINITIALIZATION = 'SETINITIALIZATION';

const initialState = {
    isInit: false
}

export const initializationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SETINITIALIZATION: {
            return {
                ...state,
                isInit: true
            }
        }
        default: {
            return state
        }
    }
}

const setInit = () => {
    return {
        type: SETINITIALIZATION
    }
}

export const initialization = () => async (dispatch) => {
    let promise = dispatch(getAuth());
    promise.then(() => dispatch(setInit()))
    
}
import {getAuth} from './authReducer'

const SETINITIALIZATION = 'SETINITIALIZATION';

const initialState = {
    isInit: false
}

type InitialStateType = typeof initialState

export const initializationReducer = (state = initialState, action:any):InitialStateType => {
    switch(action.type) {
        case SETINITIALIZATION: {
            return {
                ...state,
                isInit: true,
            }
        }
        default: {
            return state
        }
    }
}


type SetInitType = {
    type: typeof SETINITIALIZATION,

}
const setInit = (): SetInitType => {
    return {
        type: SETINITIALIZATION
    }
}

export const initialization = () => async (dispatch:any) => {
    let promise = dispatch(getAuth());
    promise.then(() => dispatch(setInit()))
    
}
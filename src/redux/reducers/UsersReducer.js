import {usersAPI} from '../../api/api'

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const SETPAGECOUNT = 'SETPAGECOUNT';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETISFETCHING = 'SETISFETCHING';
const SETDISABLED = 'SETDISABLED';

const initialState = {
    users: [],
    pageCount: 0,
    onPageUsers: 5,
    currentPage: 1,
    isFetching: true,
    isDisabled: false,
    isDisabledBtn: []
};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) return {...user, followed: true}
                    return user;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(user => {
                    if(user.id === action.userId) return {...user, followed: false}
                    return user;
                })
            }
        }
        case SETUSERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SETPAGECOUNT: {
            return {
                ...state,
                pageCount: action.pageCount
            }
        }
        case SETCURRENTPAGE: {
            return {
                ...state,
                currentPage: action.page
            }
        }
        case SETISFETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SETDISABLED: {
            return {
                ...state,
                isDisabledBtn: action.prop 
                ? [...state.isDisabledBtn, action.userId]
                : state.isDisabledBtn.filter(el=>el!==action.userId)
            }
        }
        default: 
            return state;
    }
}

export const follow = (userId) => {
    debugger
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollow = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}
export const setUsers = (users) => {
    return {
        type: SETUSERS,
        users
    }
}
export const setPageCount = (pageCount) => {
    return {
        type: SETPAGECOUNT,
        pageCount
    }
}
export const setCurrentPage = (page) => {
    return {
        type: SETCURRENTPAGE,
        page
    }
}
export const setIsFetching = (isFetching) => {
    return {
        type: SETISFETCHING,
        isFetching
    }
}
export const setIsDisabled = (userId,prop) => {
    return {
        type: SETDISABLED,
        userId,
        prop
    }
}

export const getUsers = (onPageUsers, currentPage) => (dispatch) => {
    dispatch(setIsFetching(true));
        usersAPI.getUsers(onPageUsers, currentPage)
        .then(data => {
            dispatch(setIsFetching(false))
            dispatch(setPageCount(data.totalCount));
            dispatch(setUsers(data.items));
        })
}
export const getFollow = (userId) => (dispatch) => {
    dispatch(setIsDisabled(userId, true));
    usersAPI.followUsers(userId,{})
    .then(data => {
        if(data.resultCode == 0) {
            dispatch(follow(userId));
            dispatch(setIsDisabled(userId, false));
        }
    })
}
export const getUnfollow = (userId) => (dispatch) => {
    dispatch(setIsDisabled(userId, true));
    usersAPI.unfollowUsers(userId,{})
    .then(data => {
        if(data.resultCode == 0) {
            dispatch(unFollow(userId));
            dispatch(setIsDisabled(userId, false));
        }
    })
}
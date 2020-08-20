import {usersAPI} from '../../api/api'
import { UserType } from './types';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const SETPAGECOUNT = 'SETPAGECOUNT';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETISFETCHING = 'SETISFETCHING';
const SETDISABLED = 'SETDISABLED';

const initialState = {
    users: [] as Array<UserType>,
    pageCount: 0,
    onPageUsers: 5,
    currentPage: 1,
    isFetching: true,
    isDisabled: false,
    isDisabledBtn: [] as Array<number>
};

type InitialStateType = typeof initialState

export const userReducer = (state = initialState, action: any):InitialStateType => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: followInfollow(state.users, action.userId, true)
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: followInfollow(state.users, action.userId, false)
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

const followInfollow = (state:Array<UserType>, userId: number, prop:boolean):Array<UserType> => {
    return state.map(user => {
        if(user.id === userId) return {...user, followed: prop}
        return user;
    })
}

type FollowType = {
    type: typeof FOLLOW,
    userId:number
}
export const follow = (userId:number):FollowType => {
    return {
        type: FOLLOW,
        userId
    }
}

type UnFollowType = {
    type: typeof UNFOLLOW,
    userId:number
}
export const unFollow = (userId:number):UnFollowType => {
    return {
        type: UNFOLLOW,
        userId
    }
}

type SetUsersType = {
    type: typeof SETUSERS,
    users:UserType
}
export const setUsers = (users:UserType):SetUsersType => {
    return {
        type: SETUSERS,
        users
    }
}

type SetPageCountType = {
    type: typeof SETPAGECOUNT,
    pageCount: number
}
export const setPageCount = (pageCount:number):SetPageCountType => {
    return {
        type: SETPAGECOUNT,
        pageCount
    }
}

type CurrentPageType = {
    type: typeof SETCURRENTPAGE,
    page: number
}
export const setCurrentPage = (page:number):CurrentPageType=> {
    return {
        type: SETCURRENTPAGE,
        page
    }
}

type IsFetchingType = {
    type: typeof SETISFETCHING,
    isFetching: boolean
}
export const setIsFetching = (isFetching:boolean):IsFetchingType => {
    return {
        type: SETISFETCHING,
        isFetching
    }
}

type isDisabledType = {
    type: typeof SETDISABLED,
    userId: number,
    prop: boolean
}
export const setIsDisabled = (userId:number,prop:boolean):isDisabledType => {
    return {
        type: SETDISABLED,
        userId,
        prop
    }
}

export const getUsers = (onPageUsers:number, currentPage:number) => async (dispatch:any) => {
    dispatch(setIsFetching(true));
    const data = await usersAPI.getUsers(onPageUsers, currentPage)
    dispatch(setIsFetching(false))
    dispatch(setPageCount(data.totalCount));
    dispatch(setUsers(data.items));
}
export const getFollow = (userId:number) => async (dispatch:any) => {
    dispatch(setIsDisabled(userId, true));
    const data = await usersAPI.followUsers(userId)
    if(data.resultCode === 0) {
        dispatch(follow(userId));
        dispatch(setIsDisabled(userId, false));
    }
}
export const getUnfollow = (userId:number) => async (dispatch:any) => {
    dispatch(setIsDisabled(userId, true));
    const data = await usersAPI.unfollowUsers(userId);
    if(data.resultCode === 0) {
        dispatch(unFollow(userId));
        dispatch(setIsDisabled(userId, false));
    }
}
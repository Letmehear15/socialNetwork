const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SET_USERS';
const SETPAGECOUNT = 'SETPAGECOUNT';
const SETCURRENTPAGE = 'SETCURRENTPAGE';

const initialState = {
    users: [],
    pageCount: 0,
    onPageUsers: 5,
    currentPage: 1 
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
        default: 
            return state;
    }
}

export const followUserAC = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}
export const unFollowUserAC = (userId) => {
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
export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getPageCountSelector = (state) => {
    return state.usersPage.pageCount
}

export const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}

export const getOnPageUsersSelector = (state) => {
    return state.usersPage.onPageUsers
}
import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {setCurrentPage, getUsers, getFollow, getUnfollow} from '../../redux/reducers/UsersReducer';
import { compose } from 'redux';
import {getAuthSelector} from '../../redux/selectors/authSelector';
import {
    getUsersSelector, 
    getPageCountSelector, 
    getCurrentPageSelector, 
    getOnPageUsersSelector
} from '../../redux/selectors/usersSelector';
import Users from './Users';

const UsersContainer = (props) =>  {

    useEffect(() => {
        props.getUsers(props.onPageUsers, props.currentPage)
    },[])

    const onChoose = (el) => {
        props.setCurrentPage(el)
        props.getUsers(props.onPageUsers, el)
    }

    const {users, pageCount, onPageUsers, currentPage, isFetching, isDisabledBtn, isDisabled, getFollow, getUnfollow, isAuth} = props;
    return(
        <Users 
            getUnfollow={getUnfollow} 
            users={users} 
            pageCount={pageCount} 
            onPageUsers={onPageUsers} 
            currentPage={currentPage}
            onChoose={onChoose}
            isDisabledBtn={isDisabledBtn}
            isDisabled={isDisabled}
            getFollow={getFollow}
            isAuth={isAuth}
            isFetching={isFetching}/>
    )
}

const mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageCount: getPageCountSelector(state),
        onPageUsers: getOnPageUsersSelector(state),
        currentPage: getCurrentPageSelector(state),
        isAuth: getAuthSelector(state),
        isFetching: state.usersPage.isFetching,
        isDisabledBtn: state.usersPage.isDisabledBtn,
        isDisabled: state.usersPage.isDisabled,
    }
}
 export default compose(
    connect( mapStateToProps,{setCurrentPage, getUnfollow, getUsers, getFollow}),
)(UsersContainer)
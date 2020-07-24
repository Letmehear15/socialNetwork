import React, {Component} from 'react'
import {connect} from 'react-redux';
import User from './User'
import Loader from '../Loader/Loader'
import {setPageCount, setCurrentPage, getUsers, getFollow, getUnfollow} from '../../redux/reducers/UsersReducer';
import { withAuthRedirect } from '../../hoc/authRedirect';
import { compose } from 'redux';

class UsersContainer extends Component  {

    componentDidMount() {
        this.props.getUsers(this.props.onPageUsers, this.props.currentPage)
    }

    onChoose = (el) => {
        this.props.setCurrentPage(el)
        this.props.getUsers(this.props.onPageUsers, el)
    }

    render() {
        const {users, pageCount, onPageUsers, currentPage, isFetching, isDisabledBtn, isDisabled, getFollow, getUnfollow} = this.props;
        if(isFetching) return <Loader/>
        return(
            <User 
                getUnfollow={getUnfollow} 
                users={users} 
                pageCount={pageCount} 
                onPageUsers={onPageUsers} 
                currentPage={currentPage}
                onChoose={this.onChoose}
                isDisabledBtn={isDisabledBtn}
                isDisabled={isDisabled}
                getFollow={getFollow}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        onPageUsers: state.usersPage.onPageUsers,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isDisabledBtn: state.usersPage.isDisabledBtn,
        isDisabled: state.usersPage.isDisabled,
    }
}
 export default compose(
    connect( mapStateToProps,{ setPageCount, setCurrentPage, getUnfollow, getUsers, getFollow}),
    withAuthRedirect
)(UsersContainer)
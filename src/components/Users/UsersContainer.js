import React, {Component} from 'react'
import {connect} from 'react-redux';
import User from './User'
import axios from 'axios';
import {followUserAC, unFollowUserAC, setUsers, setPageCount, setCurrentPage} from '../../redux/reducers/UsersReducer'

class UsersContainer extends Component  {

    componentDidMount() {
        if(this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.onPageUsers}`)
            .then(res => {
                this.props.setPageCount(res.data.totalCount)
                this.props.setUsers(res.data.items)
            })
        }
    }

    onChoose = (el) => {
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${el}&count=${this.props.onPageUsers}`)
            .then(res => {
                this.props.setPageCount(res.data.totalCount)
                this.props.setUsers(res.data.items)
            })
    }

    render() {
        const {follow, unFollow, users, pageCount, onPageUsers, currentPage} = this.props
        return(
            <User 
                follow={follow} 
                unFollow={unFollow} u
                users={users} 
                pageCount={pageCount} 
                onPageUsers={onPageUsers} 
                currentPage={currentPage}
                onChoose={this.onChoose}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageCount: state.pageCount.pageCount,
        onPageUsers: state.pageCount.onPageUsers,
        currentPage: state.pageCount.currentPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followUserAC(userId)),
        unFollow: (userId) => dispatch(unFollowUserAC(userId)),
        setUsers: (users) => dispatch(setUsers(users)),
        setPageCount: (pageCount) => dispatch(setPageCount(pageCount)),
        setCurrentPage: page => dispatch(setCurrentPage(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
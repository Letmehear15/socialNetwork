import React, { Component } from 'react';
import Profile from './Profile';
import Load from '../Loader/Loader'
import { connect } from 'react-redux';
import {getUser, setIsFetching, getProfile, getStatus, changeStatus} from '../../redux/reducers/profileReducer';
import {withAuthRedirect} from '../../hoc/authRedirect'
import { withRouter} from "react-router";
import { compose } from 'redux';

class ProfileContainer extends Component {

    componentDidMount() {
        let {id} = this.props.match.params;
        if(!id) id = this.props.myId
        this.props.getProfile(id);
        this.props.getStatus(id);
    }

    render() {
        if(this.props.profile.length === 0 ) return <Load/>;
        return <Profile profile={this.props.profile} {...this.props}/>;
        
    }
}


const mapStateToProps = (state) => {
    return {
        profile: state.profileUser.profile,
        isFetching: state.profileUser.isFetching,
        status: state.profileUser.status,
        myId: state.authMe.id
    }
}

export default compose(
    connect(mapStateToProps, {getUser, setIsFetching, getProfile, getStatus, changeStatus} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
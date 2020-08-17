import React, { useEffect } from 'react';
import Profile from './Profile';
import Load from '../Loader/Loader'
import { connect } from 'react-redux';
import {getUser, getProfile, getStatus, changeStatus, changePhoto, updateProfile} from '../../redux/reducers/profileReducer';
import {getProfileSelector, getStatusSelector} from '../../redux/selectors/profileSelector'
import {withAuthRedirect} from '../../hoc/authRedirect'
import { withRouter} from "react-router";
import { compose } from 'redux';

const ProfileContainer = (props) => {

    useEffect(() => {
        let {id} = props.match.params;
        if(!id) id = props.myId
        props.getProfile(id);
        props.getStatus(id);
    },[])
    
    if(props.isFetching) return <Load/>;
    return <Profile {...props}/>;
}


const mapStateToProps = (state) => {
    return {
        profile: getProfileSelector(state),
        isFetching: state.profileUser.isFetching,
        status: getStatusSelector(state),
        myId: state.authMe.id
    }
}

export default compose(
    connect(mapStateToProps, {getUser, getProfile, getStatus, changeStatus, changePhoto, updateProfile} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
import React, { Component } from 'react';
import Profile from './Profile';
import Load from '../Loader/Loader'
import { connect } from 'react-redux';
import {getUser, setIsFetching, getProfile} from '../../redux/reducers/profileReducer';
import { withRouter } from "react-router";

class ProfileContainer extends Component {

    componentDidMount() {
        let {id} = this.props.match.params;
        if(!id) id = 2
        this.props.getProfile(id);
    }

    render() {
        if(this.props.profile.length === 0 ) return <Load/>;
        return <Profile profile={this.props.profile}/>;
        
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profileUser.profile,
        isFetching: state.profileUser.isFetching
    }
}

const profileWithRouter = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUser, setIsFetching, getProfile} )(profileWithRouter);

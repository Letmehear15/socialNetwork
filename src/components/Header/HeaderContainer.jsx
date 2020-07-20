import React from 'react';
import Header from './Header';
import {auth, getAuth} from '../../redux/reducers/authReducer'
import { Component } from 'react';
import { connect } from 'react-redux';

class HeaderContainer extends Component {
    
    componentDidMount() {
      this.props.getAuth()
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state)=> {
    return {
        isAuth: state.authMe.isAuth,
        id: state.authMe.id,
        login: state.authMe.login,
        email: state.authMe.email,
    }
}
export default connect(mapStateToProps,{auth, getAuth})(HeaderContainer)
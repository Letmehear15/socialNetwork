import React from 'react';
import Header from './Header';
import {logout} from '../../redux/reducers/authReducer'
import { connect } from 'react-redux';

const HeaderContainer = (props) => {
    return (
        <Header {...props}/>
    )
}
const mapStateToProps = (state)=> {
    return {
        isAuth: state.authMe.isAuth,
        id: state.authMe.id,
        login: state.authMe.login,
        email: state.authMe.email,
    }
}
export default connect(mapStateToProps,{logout})(HeaderContainer)
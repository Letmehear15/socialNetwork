import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        isAuth: state.authMe.isAuth
    }
}

export const withAuthRedirect = (Component) => {
    class ComponentWrapper extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to="/login"/>
            return(
                <Component {...this.props}/>
            )
        }
    }

    return connect(mapStateToProps)(ComponentWrapper)
}

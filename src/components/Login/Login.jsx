import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { login } from '../../redux/reducers/authReducer';
import { Redirect } from 'react-router-dom';
import c from './Login.module.css';
import { ValidateInfoInput } from '../ValidateInfo/ValidateInfo';
import { required } from '../../utils/Validate';
import {getAuthSelector} from '../../redux/selectors/authSelector';

const Form = (props) => {
    const{handleSubmit} = props;
    return (
        <form className={c.mainForm} onSubmit={handleSubmit}>
            <div>
                <Field 
                    className={c.mail} 
                    placeholder="Email" 
                    name="email" 
                    component={ValidateInfoInput}
                    validate={[required]}
                    type="email" 
                    id="login"/>
            </div>
            <div>
                <Field 
                    className={c.pass} 
                    placeholder="Password" 
                    name="password" 
                    component={ValidateInfoInput} 
                    validate={[required]}
                    type="password" 
                    id="password"/>
            </div>
            <div className={c.check}>
                <label htmlFor="remember">Remember me</label>
                <Field name="isRemember" component="input" type="checkbox" id="remember"/>
            </div>
            <div className={c.commonError}>
                <span>{props.error}</span>
            </div>
            <button className={c.btn} type="submit">Login</button>
        </form>
    )
}
const ContactForm = reduxForm({
    form: 'login'
  })(Form)

const LoginContainer = (props) => {
    const onSubmit = (result) => {
        if(result.isRemember === undefined) result.isRemember = false;
        props.login(result)
    }

    if(props.isAuth) {
        return <Redirect to="/profile"/>
    }
    return (
        <div>
            <h1>Login</h1>
            <ContactForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: getAuthSelector(state)
    }
}

export default connect(mapStateToProps,{login})(LoginContainer);
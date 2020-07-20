import React from 'react';
import classes from './Header.module.css';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';

const Header = ({isAuth, login})=>{
    return (
        <header className={classes.header}>
            <img src={logo} alt="logo"/>
            <span className={classes.login}>{isAuth?login:<NavLink to="/login">Login</NavLink>}</span>
        </header>
    )
}
export default Header;

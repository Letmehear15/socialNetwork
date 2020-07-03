import React from 'react';
import classes from './Users.module.css';
import {NavLink} from 'react-router-dom';

const Users = (props) => {
    return (
        <div className={classes.dialogItem}>
            <NavLink to={`/message/${props.id}`} activeClassName={classes.active}> {props.name} </NavLink>
        </div>
    )
}

export default Users;
import React from 'react';
import classes from './List.module.css';
import {NavLink} from 'react-router-dom';

const List = () => {
    return (
        <ul className={classes.list}>
            <li className={classes.item}>
                <NavLink to = '/profile' activeClassName={classes.active}> Profile</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to = '/users' activeClassName={classes.active}> Users</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to = '/message' activeClassName={classes.active}> Messages</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to = '/news' activeClassName={classes.active}> News</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to = '/music' activeClassName={classes.active}> Music</NavLink>
            </li>
            <li className={classes.item}>
                <NavLink to = '/settings' activeClassName={classes.active}> Settings</NavLink>
            </li>
        </ul>
    )
}
export default List;
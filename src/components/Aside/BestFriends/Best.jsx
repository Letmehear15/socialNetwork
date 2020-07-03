import React from 'react';
import classes from './Best.module.css';
import {NavLink} from 'react-router-dom';

const Best = (props) => {
    debugger
    let best = props.best.friends.map( (name) => {
        return (
            <li className={classes.bestItem}>
                <NavLink to={`/message/${name.id}`}>{name.name}</NavLink>
                <span className={classes.circle}></span>
            </li>
        )
    })
    return (
        <div className={classes.best}>
            <ul className={classes.bestList}>
                {best}
            </ul>
        </div>
    )
}

export default Best;
import React from 'react';
import classes from './Mypost.module.css';

const Mypost = (props) => {
    return (
        <div className={classes.item}>
            <img alt="avatarPost" src = 'https://pbs.twimg.com/profile_images/823569976342773760/c2RLAG7h_400x400.jpg'/>
            {props.message}
        </div>
    )
}

export default Mypost;
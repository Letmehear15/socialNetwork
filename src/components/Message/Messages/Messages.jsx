import React from 'react';
import classes from './Messages.module.css';


const Messages = (props) => {
    return (
        <div className={classes.messageItem}>
            {props.msg} 
        </div>
    )
}

export default Messages;
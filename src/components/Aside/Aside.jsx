import React from 'react';
import classes from './Aside.module.css';
import List from './List/List';
import Best from './BestFriends/Best';

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <List/>   
            {/* <Best best={value.getState().bestFriendsReducer}/> */}
        </aside>
    )
}
export default Aside;
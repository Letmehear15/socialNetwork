import React from 'react';
import classes from './Aside.module.css';
import List from './List/List';

const Aside = () => {
    return (
        <aside className={classes.aside}>
            <List/>   
        </aside>
    )
}
export default Aside;
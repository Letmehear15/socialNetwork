import React from 'react';
import classes from './MainImg.module.css';

const Image = (props) => {
    return (
        <div className={classes.main}>
            <img src="https://images.squarespace-cdn.com/content/v1/559acc6be4b04990389bfc35/1554649312032-0BHYVE5EQ0IN9HU436ZH/ke17ZwdGBToddI8pDm48kJ9ChgD6voUnaaZMEWytL-8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcTLdVX1Tvv4nFgHEPJKBv8bdJpd4syg-A64D2zUMq0FcP819ZD1amcyouPebsNUPI/brave-bears-home-nature-museum-banner.jpg?format=2500w" className="main_img"/>
        </div>
    )
}

export default Image;
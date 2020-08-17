import React, { memo } from 'react';
import c from './Users.module.css'
import { useState } from 'react';

export const Pagination = memo(({pageCount, onPageItems, currentPage, onChoose, portion=10}) => {
    let pages = Math.ceil( (pageCount - 5390)/onPageItems);
    const count = [];
    if(pages > 0) {
        for(let i = 1; i < pages; i ++) {
            count.push(i)
        }
    }

    let tottalPortionCount = Math.ceil(pages/portion);
    const [portionPage, setPortion] = useState(1);
    let leftSide = (portionPage - 1) * portion;
    let rightSide = portion * portionPage;

    const newCount = count
        .filter((el) => el<=rightSide&&el>=leftSide)
        .map((el, i) => {
            return(
                <span 
                    key={i}
                    className={`${c.num} ${currentPage === el ? c.active : ''}`}
                    onClick = {( () => onChoose(el) )}> {el} </span>
            )
    })


    return (
        <div className={c.pagWrapper}>
            <button disabled={portionPage===1&&true} onClick={() => setPortion(portionPage-1)}>Prev</button>
                {newCount}
            <button disabled={portionPage>=tottalPortionCount&&true} onClick={() => setPortion(portionPage+1)}>Next</button>
        </div>
    )
})
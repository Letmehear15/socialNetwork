import React from 'react'; 
import c from './Users.module.css'
import userLogo from '../../img/user.png';

const User = ({follow, unFollow, users, pageCount, onPageUsers, currentPage, onChoose}) => {

        let pages = Math.ceil( (pageCount - 4900)/onPageUsers)
        let items = users.map(user => {
            return <div className={c.item}>
                        <div className={c.leftSide}>
                            <div className={c.avatarImg}>
                                <img src={user.photos.small? user.photos.small:userLogo} alt="avatar"/>
                            </div>
                            {user.followed?<button className={c.btn} onClick={() => unFollow(user.id)}>Unfollow</button>:<button className={c.btn} onClick={() => follow(user.id)}>Follow</button>}
                        </div>
                        <div className={c.rightSide}>
                            <div className={c.itemLeft}>
                                <span className={c.name}>
                                    {user.name}
                                </span>
                                <span className="status">
                                    {user.status}
                                </span>
                            </div>
                            <div className={c.itemRight}>
                                <span className="country">Czech</span>
                                <span className="city">Brno</span>
                            </div>
                        </div>
                    </div>
        })
        let count = [];
        if(pages > 0) {
            for(let i = 1; i < pages; i ++) {
                count.push(i)
            }
        }

        let newCount = count.map(el => {
            return(
                <span 
                    className={`${c.num} ${currentPage === el ? c.active : null}`}
                    onClick = {( () => onChoose(el) )}> {el} </span>
            )
        })
    return (
        <div className={c.container}>
            <div className={c.items}>
                {items}
            </div>
            {newCount}
        </div>
    )
}

export default User;
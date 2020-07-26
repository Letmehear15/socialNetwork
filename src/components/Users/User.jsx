import React from 'react'; 
import c from './Users.module.css'
import userLogo from '../../img/user.png';
import { NavLink } from 'react-router-dom';

const User = ({users, pageCount, onPageUsers, currentPage, onChoose, isDisabledBtn, getFollow, getUnfollow}) => {
        let pages = Math.ceil( (pageCount - 5390)/onPageUsers)
        let items = users.map(user => {
            return <div className={c.item}>
                        <div className={c.leftSide}>
                            <div className={c.avatarImg}>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small? user.photos.small:userLogo} alt="avatar"/>
                                </NavLink>
                            </div>
                            {user.followed
                                ?<button 
                                    disabled={isDisabledBtn.some(el => el === user.id)} 
                                    className={c.btn} 
                                    onClick={() => getUnfollow(user.id)}>
                                    Unfollow
                                 </button>
                                :<button 
                                    disabled={isDisabledBtn.some(el => el === user.id)} 
                                    className={c.btn} 
                                    onClick={() => getFollow(user.id)}>
                                    Follow
                                </button>}
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

        let newCount = count.map((el) => {
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
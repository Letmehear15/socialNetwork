import React from 'react';
import c from './Users.module.css';
import userLogo from '../../img/user.png';
import { NavLink } from 'react-router-dom';
import Loader from '../Loader/Loader';

const User = ({users, isDisabledBtn, getFollow, getUnfollow, isAuth, isFetching}) => {
    if(isFetching) return <Loader/>
    return users.map(user => {
        return <div key={user.id} className={c.item}>
                    <div className={c.leftSide}>
                        <div className={c.avatarImg}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small? user.photos.small:userLogo} alt="avatar"/>
                            </NavLink>
                        </div>
                        {user.followed
                            ?<button 
                                disabled={isDisabledBtn.some(el => el === user.id)} 
                                className={`${c.btn} ${!isAuth?c.hide:null}`} 
                                onClick={() => getUnfollow(user.id)}>
                                Unfollow
                             </button>
                            :<button 
                                disabled={isDisabledBtn.some(el => el === user.id)} 
                                className={`${c.btn} ${!isAuth?c.hide:null}`} 
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
}

export default User;
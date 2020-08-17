import React from 'react'; 
import c from './Users.module.css'
import {Pagination} from './Pagination'
import User from './User';

const Users = ({users, pageCount, onPageUsers, currentPage, onChoose, isDisabledBtn, getFollow, getUnfollow, isAuth, isFetching}) => {
    
    return (
        <div className={c.container}>
            <div className={c.items}>
                <User 
                    users={users} 
                    isDisabledBtn={isDisabledBtn} 
                    getFollow={getFollow} 
                    getUnfollow={getUnfollow} 
                    isAuth={isAuth}
                    isFetching={isFetching}
                />
            </div>
                <Pagination 
                    pageCount={pageCount} 
                    onPageItems={onPageUsers} 
                    currentPage={currentPage} 
                    onChoose={onChoose}
                />
        </div>
    )
}

export default Users;
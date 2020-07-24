import React from 'react';
import PostsContainer from './posts/PostsContainer';
import Info from './info/Info';
import Status from './status/Status'
import './Main.module.css';

const Profile = ({profile, status, changeStatus}) => {
    return (
        <main>
            <Info profile={profile}/>
            <Status status={status} changeStatus={changeStatus}/>
            <PostsContainer/>
        </main>  
    )
}

export default Profile;
import React from 'react';
import PostsContainer from './posts/PostsContainer'
import Info from './info/Info'
import Image from './mainImg/MainImg'
import './Main.module.css';

const Profile = ({profile}) => {
    return (
        <main>
            <Image/>
            <Info profile={profile}/>
            <PostsContainer/>
        </main>  
    )
}

export default Profile;
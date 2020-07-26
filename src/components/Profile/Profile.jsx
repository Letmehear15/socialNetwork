import React from 'react';
import PostsContainer from './posts/PostsContainer';
import Info from './info/Info';
import './Main.module.css';

const Profile = (props) => {
    return (
        <main>
            <Info {...props}/>
            <PostsContainer/>
        </main>  
    )
}

export default Profile;
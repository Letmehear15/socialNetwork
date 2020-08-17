import React from 'react';
import PostsContainer from './posts/PostsContainer';
import Info from './info/Info';
import c from './Main.module.css';
import About from './info/About';

const Profile = ({profile, status, changeStatus, changePhoto, match:{params}, updateProfile, myId}) => {

    return (
        <main>
            <div className={c.leftSide}>
                <Info 
                    profile={profile}
                    changePhoto={changePhoto}
                    params={params}/>
                <PostsContainer/>
            </div>
            <div className={c.rigthSide}>
                <About 
                    updateProfile={updateProfile} 
                    status={status} 
                    changeStatus={changeStatus} 
                    profile={profile}
                    myId={myId}
                    params={params}/>
            </div>
        </main>  
    )
}

export default Profile;
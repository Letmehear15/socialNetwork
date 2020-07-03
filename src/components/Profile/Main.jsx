import React from 'react';
import './Main.module.css';
import PostsContainer from './posts/PostsContainer'
import Info from './info/Info'
import Image from './mainImg/MainImg'

const Main = ()=>{
    return (
        <main>
            <Image/>
            <Info/>
            <PostsContainer/>
        </main>
            
    )
}
export default Main;
import React from 'react';
import classes from './Posts.module.css';
import Mypost from './Mypost/Mypost';

const Posts = (props) => {
    let postInfo = props.msg.posts.map( post => <Mypost key={post.id} message={post.post}/> );
    let myRef = React.createRef();

    function changeText() {
        let text = myRef.current.value;
        props.changeText(text);
    }

    return (
        <div className="posts"> 
            <div className={classes.newpost}>
                <h2>My posts</h2>
                <textarea 
                    type="text" 
                    ref={myRef} 
                    value={props.msg.changePost} 
                    onChange={changeText}/>
                <input 
                    type="submit" 
                    onClick={props.newPost} 
                    value="send"/>
            </div>
            {postInfo}
        </div>
    )
}

export default Posts;

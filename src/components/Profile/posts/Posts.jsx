import React, {memo} from 'react';
import classes from './Posts.module.css';
import Mypost from './Mypost/Mypost';
import {Field, reduxForm} from 'redux-form'
import { required, maxLength } from '../../../utils/Validate';
import { ValidateInfoTextArea } from '../../ValidateInfo/ValidateInfo';

const maxInputLength = maxLength(20);

const FormPost = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field 
                placeholder="Write a post"
                name="post" 
                component={ValidateInfoTextArea} 
                type="text"
                validate={[required, maxInputLength]}/>
            <button>Send</button>
        </form>
    )
}

const FormReduxPost = reduxForm({form:'post'})(FormPost)

const Posts = (props) => {
    let postInfo = props.msg.posts.map( post => <Mypost key={post.id} message={post.post}/> );

    function changeText(value) {
        props.addPostActionCreater(value.post);
    }

    return (
        <div className="posts"> 
            <div className={classes.newpost}>
                <h2>My posts</h2>
                <FormReduxPost onSubmit={changeText}/>
            </div>
            {postInfo}
        </div>
    )
}

export default memo(Posts);

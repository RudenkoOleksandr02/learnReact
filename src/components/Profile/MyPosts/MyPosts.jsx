import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {Field, reduxForm} from "redux-form";

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPost"}/>
            <button>ADD</button>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'myPost'})(MyPostForm)

const MyPosts = (props) => {
    const onAddPost = (formData) => {
        props.addPost(formData.newPost);
    }

    return <div>
        My posts
        <MyPostReduxForm onSubmit={onAddPost}/>
        <div>
            {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
        </div>
    </div>

}

export default MyPosts;
import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/state";



const MyPosts = (props) => {
    let newPost = React.createRef();
    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }
    const changePostText = () => {
        let text = newPost.current.value
        props.dispatch(changePostTextActionCreator(text));
    }

    return <div>
        My posts
        <div>
            <textarea ref={newPost} value={props.newPostText} onChange={changePostText}></textarea>
            <button onClick={addPost}>ADD</button>
        </div>
        <div className={s.posts}>
            {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
        </div>

    </div>

}

export default MyPosts;
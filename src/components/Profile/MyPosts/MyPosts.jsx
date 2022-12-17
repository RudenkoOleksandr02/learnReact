import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
    let newPost = React.createRef();

    const onAddPost = () => {
        props.addPost();
    }
    const onChangePostText = () => {
        let text = newPost.current.value;
        props.changePostText(text);
    }

    return <div>
        My posts
        <div>
            <textarea ref={newPost} value={props.newPostText} onChange={onChangePostText}></textarea>
            <button onClick={onAddPost}>ADD</button>
        </div>
        <div>
            {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
        </div>
    </div>

}

export default MyPosts;
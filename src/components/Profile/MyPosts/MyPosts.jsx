import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const MyPosts = (props) => {
    let newPost = React.createRef();
    const addPost = () => {
        let text = newPost.current.value;
        props.addPost(text)
        newPost.current.value = '';
    }

    return <div>
        My posts
        <div>
            <textarea ref={newPost}></textarea>
            <button onClick={addPost}>ADD</button>
        </div>
        <div className={s.posts}>
            {props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)}
        </div>

    </div>

}

export default MyPosts;
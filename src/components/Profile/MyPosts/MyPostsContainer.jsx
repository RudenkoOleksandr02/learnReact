import React from 'react';
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    let state = props.store.getState();

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    const changePostText = (text) => {
        props.store.dispatch(changePostTextActionCreator(text));
    }

    return <MyPosts posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                    addPost={addPost}
                    changePostText={changePostText}
    />
}

export default MyPostsContainer;
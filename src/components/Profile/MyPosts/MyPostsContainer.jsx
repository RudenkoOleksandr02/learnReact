import React from 'react';
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {
    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            const addPost = () => {
                store.dispatch(addPostActionCreator());
            }
            const changePostText = (text) => {
                store.dispatch(changePostTextActionCreator(text));
            }
            return <MyPosts posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                            addPost={addPost}
                            changePostText={changePostText}
            />
        }
        }
    </StoreContext.Consumer>
}

export default MyPostsContainer;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state, {addPost, updateNewPostText, addMessage, updateNewMessageText, subscribe} from "./redux/state";
import App from "./App";

const rerenderEntireTree = () => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>, document.getElementById('root'));
}

rerenderEntireTree();
subscribe(rerenderEntireTree);


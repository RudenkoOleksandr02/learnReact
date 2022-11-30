import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export const rerenderEntireTree = (state, addPost, updateNewPostText, addMessage, updateNewMessageText) => {
    ReactDOM.render(<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>, document.getElementById('root'));
}



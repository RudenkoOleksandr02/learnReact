import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from "./redux/state";
import App from "./App";

const rerenderEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={store.addPost} updateNewPostText={store.updateNewPostText} addMessage={store.addMessage} updateNewMessageText={store.updateNewMessageText}/>, document.getElementById('root'));
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);


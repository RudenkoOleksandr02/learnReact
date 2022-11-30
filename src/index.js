import {rerenderEntireTree} from "./render";
import state from "./redux/state";
import {addPost} from "./redux/state";
import {updateNewPostText} from "./redux/state";
import {updateNewMessageText} from "./redux/state";
import {addMessage} from "./redux/state";

rerenderEntireTree(state, addPost, updateNewPostText, addMessage, updateNewMessageText);


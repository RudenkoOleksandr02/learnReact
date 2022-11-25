import App from './App';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from "./render";
import state from "./redux/state";
import {addPost} from "./redux/state";

rerenderEntireTree(state, addPost);


import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi my name is sasha', likesCount: '2000'},
            {id: 2, message: 'I learn react', likesCount: '3000'},
        ],
        newPostText: ''
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Misha'},
            {id: 4, name: 'Nastya'},
            {id: 5, name: 'Angela'},
            {id: 6, name: 'Vanga'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'I am fine'},
        ],
        newMessageText: 'aaa'
    },
    sidebarPage: {
        friends: [
            {id: 1, name: 'Sasha', avatar: 'https://ireland.apollo.olxcdn.com/v1/files/nwcj26i52i981-UA/image;s=750x1000'},
            {id: 2, name: 'Andrey', avatar: 'https://ireland.apollo.olxcdn.com/v1/files/2knlvxbv7vyl2-UA/image;s=1000x700'},
            {id: 3, name: 'Misha', avatar: 'https://ireland.apollo.olxcdn.com/v1/files/w3vgq7dl40g53-UA/image;s=1000x700'},
        ],
        navLinks: [
            {id: 1, path: '/profile', title: 'Profile'},
            {id: 2, path: '/dialogs', title: 'Messages'},
            {id: 3, path: '/news', title: 'News'},
            {id: 4, path: '/music', title: 'Music'},
            {id: 5, path: '/settings', title: 'Settings'},
        ]
    }
}

export let addPost = () => {
    let text = state.profilePage.newPostText;
    let post = {id: state.profilePage.posts.length + 1, message: text, likesCount: 0}
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = '';
    rerender();
}
export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerender();
}
export let addMessage = () => {
    let text = state.dialogsPage.newMessageText;
    state.dialogsPage.messages.push({id: state.dialogsPage.messages + 1, message: text});
    state.dialogsPage.newMessageText = '';
    rerender();
}
export let updateNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerender();
}
function rerender() {
    rerenderEntireTree(state, addPost, updateNewPostText, addMessage, updateNewMessageText);
}


export default state;
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        {id: 1, message: 'Hi my name is sasha', likesCount: '2000'},
        {id: 2, message: 'I learn react', likesCount: '3000'},
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(post);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, text: text}
);

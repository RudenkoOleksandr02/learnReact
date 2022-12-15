const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
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

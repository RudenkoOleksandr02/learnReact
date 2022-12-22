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
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            let post = {
                id: stateCopy.posts.length + 1,
                message: stateCopy.newPostText,
                likesCount: 0
            };
            stateCopy.posts.push(post);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.text;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, text: text}
);

const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let text = state.newMessageText;
            state.messages.push({id: state.messages + 1, message: text});
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeMessageTextActionCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, text: text}
);
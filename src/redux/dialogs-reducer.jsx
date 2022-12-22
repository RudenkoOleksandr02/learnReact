const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let text = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages + 1, message: text}],
                newMessageText: ''
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.text
            };
        }
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const changeMessageTextActionCreator = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, text: text}
);
const ADD_MESSAGE = "ADD-MESSAGE";

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.newMessage}],
            };
        }
        default:
            return state;
    }
}

export default dialogsReducer;

export const addMessageActionCreator = (newMessage) => ({type: ADD_MESSAGE, newMessage});

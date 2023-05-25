import {dialogsType, messageType} from "../types/types";

const ADD_MESSAGE = "dialogs/ADD-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Misha'},
        {id: 4, name: 'Nastya'},
        {id: 5, name: 'Angela'},
        {id: 6, name: 'Vanga'},
    ] as Array<dialogsType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'I am fine'},
    ] as Array<messageType>
}
export type initialStateType = typeof initialState



const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: action.newMessage}]
            };
        }
        default:
            return state;
    }
}

export default dialogsReducer;

type actionAddMessageActionCreatorType = {
    type: typeof ADD_MESSAGE;
    newMessage: any
}
export const addMessageActionCreator = (newMessage: string): actionAddMessageActionCreatorType => ({type: ADD_MESSAGE, newMessage})


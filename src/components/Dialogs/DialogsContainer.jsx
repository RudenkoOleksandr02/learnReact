import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState();

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }
    const changeMessageText = (text) => {
        props.store.dispatch(changeMessageTextActionCreator(text));
    }

    return <Dialogs addMessage={addMessage}
                    changeMessageText={changeMessageText}
                    dialogs={state.dialogsPage.dialogs}
                    messages={state.dialogsPage.messages}
                    newMessageText={state.dialogsPage.newMessageText}
    />
}

export default DialogsContainer;
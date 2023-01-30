import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from 'react-router-dom'
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {
    let newMessage = React.createRef()

    const onAddMessage = () => {
        props.addMessage();
    }
    const onChangeMessageText = () => {
        const text = newMessage.current.value;
        props.changeMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(message => <Message key={message.id} message={message.message}/>)}
                <textarea ref={newMessage} value={props.newMessageText} onChange={onChangeMessageText}></textarea>
                <button onClick={onAddMessage}>ADD</button>
            </div>
        </div>
    )
}

export default Dialogs;
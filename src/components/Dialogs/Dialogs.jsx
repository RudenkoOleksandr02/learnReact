import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let newMessage = React.createRef()
    const addMessage = () => {
        let text = newMessage.current.value;
        alert(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messages.map(message => <Message key={message.id} message={message.message}/>)}
                <textarea ref={newMessage}></textarea>
                <button onClick={addMessage}>ADD</button>
            </div>
        </div>
    )
}

export default Dialogs;
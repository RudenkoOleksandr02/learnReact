import React from 'react';
import s from './../Dialogs.module.css';

const Message = (props) => {
    let newMessage = React.createRef();
    const addMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return <>
        <div className={s.message}>{props.message}</div>
        <textarea ref={newMessage}></textarea>
        <button onClick={addMessage}>ADD</button>
    </>
}

export default Message;
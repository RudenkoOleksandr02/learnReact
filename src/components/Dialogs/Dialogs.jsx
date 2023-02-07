import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {FormControl} from "../common/FormControls/FormControls";
import {maxLengthCreator, required} from "../../utils/validate";

const maxLength50 = maxLengthCreator(50);

const DialogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field tag="textarea" component={FormControl} name={"newMessage"} validate={[required, maxLength50]}/>
            <button>ADD</button>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

const Dialogs = (props) => {
    const onAddMessage = (formData) => {
        props.addMessage(formData.newMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {props.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messages.map(message => <Message key={message.id} message={message.message}/>)}
                <DialogsReduxForm onSubmit={onAddMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;
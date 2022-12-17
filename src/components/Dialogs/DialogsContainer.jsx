import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {


    return <StoreContext.Consumer>
        {store => {
            let state = store.getState();

            const addMessage = () => {
                store.dispatch(addMessageActionCreator());
            }
            const changeMessageText = (text) => {
                store.dispatch(changeMessageTextActionCreator(text));
            }
            return <Dialogs addMessage={addMessage}
                     changeMessageText={changeMessageText}
                     dialogs={state.dialogsPage.dialogs}
                     messages={state.dialogsPage.messages}
                     newMessageText={state.dialogsPage.newMessageText}
            />
        }

        }
    </StoreContext.Consumer>
}

export default DialogsContainer;
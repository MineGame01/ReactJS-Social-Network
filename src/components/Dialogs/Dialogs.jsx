import React from "react";
import Style from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessagesFormRedux from "./MessagesForm/MessagesForm";

const Dialogs = (props) => {
    const {
        messagesPage
    } = props
    let dialogsElements = messagesPage.dialogsData.map(dialog =>
        <Dialog
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
        />
    )
    let messagesElements = messagesPage.messagesData.map(message =>
        <Message
            id={message.id}
            message={message.message}
            my={message.my}
        />
    )

    const addMessage = value => {
        props.addMessage({newMessage: value.newMessage})
    }

    return (
        <div>
            <div className={Style.dialogs}>
                <div className={Style.dialogs__dialogsGrid}>
                    <div className={Style.dialogs__dialogsGrid__dialogsItem}>
                        {dialogsElements}
                        <div className={Style.dialogs__newMessage}>
                            <MessagesFormRedux onSubmit={addMessage}/>
                        </div>
                    </div>
                    <div className={Style.dialogs__dialogsGrid__messagesItem}>
                        {messagesElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
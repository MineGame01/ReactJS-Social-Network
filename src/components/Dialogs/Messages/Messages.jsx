import React from 'react'
import MessagesForm from "./MessagesForm/MessagesForm";
import Message from "./Message/Message";

const Messages = (props) => {
    const {
        dialogId, sendMessageUserByIdThunkCreator,
        messagesUserById, deleteMessageByIdThunkCreator
    } = props

    const sendMessage = value => {
        sendMessageUserByIdThunkCreator(dialogId, value.newMessage);
    }

    return <div>
        {dialogId && messagesUserById !== null && messagesUserById.map(message => {
            return <Message
                key={message.id}
                dialogId={dialogId}
                messageId={message.id}
                messageSenderName={message.senderName}
                messageValue={message.body}
                deleteMessageByIdThunkCreator={deleteMessageByIdThunkCreator}
            />
        })}
        <div>{dialogId && <MessagesForm onSubmit={sendMessage}/>}</div>
    </div>
}

export default Messages
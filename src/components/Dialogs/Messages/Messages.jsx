import React from 'react'
import MessagesForm from "./MessagesForm/MessagesForm";
import Message from "./Message/Message";

const Messages = (props) => {
    const {
        dialogIdUrl, sendMessageUserByIdThunkCreator,
        messagesUserById, deleteMessageByIdThunkCreator
    } = props

    const sendMessage = value => {
        sendMessageUserByIdThunkCreator(dialogIdUrl, value.newMessage);
    }

    return <div>
        {dialogIdUrl && messagesUserById !== null && messagesUserById.map(message => {
            return <Message
                key={message.id}
                dialogIdUrl={dialogIdUrl}
                messageId={message.id}
                messageSenderName={message.senderName}
                messageValue={message.body}
                deleteMessageByIdThunkCreator={deleteMessageByIdThunkCreator}
            />
        })}
        <div>{dialogIdUrl && <MessagesForm onSubmit={sendMessage}/>}</div>
    </div>
}

export default Messages
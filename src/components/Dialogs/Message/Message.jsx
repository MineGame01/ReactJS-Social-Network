import React from "react";
import Style from './../Dialogs.module.css'

const Message = (props) => {
    const message_right = props.my ? Style.message_right : ''
    return (
        <div className={Style.message + ' ' + message_right} id={props.id}>
            {props.message}
        </div>
    )
}

export default Message;
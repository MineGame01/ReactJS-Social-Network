import React, {useState} from 'react'
import style from './Message.module.scss'

const Message = (props) => {
    const {dialogId, message, deleteMessageByIdThunkCreator} = props

    const [isOpen, setOpen] = useState(false) //Local state

    const onOpenMenu = event => { //Opening and closing menu
        event.preventDefault() //Blocking browser menu default
        event.button === 2 && setOpen(!isOpen) //Opening a menu by right-clicking
    }

    const deleteMessageById = () => {deleteMessageByIdThunkCreator(message.id, dialogId)} //Delete message by ID

    return <div
        key={message.id}
        className={style.message}
        onContextMenu={onOpenMenu}
        title={'Right click to open menu'}
    >
        <b>{message.senderName}: </b>
        {message.body}
        <div className={`${style.menu} ${isOpen && style.menuOpen}`}>
            <button onClick={deleteMessageById} className={'buttonDefault'}>Delete</button>
        </div>
    </div>
}

export default Message
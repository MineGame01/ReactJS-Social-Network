import React, {useState} from 'react'
import style from './Message.module.scss'

const Message = (props) => {
    const {dialogIdUrl, messageValue, messageId, messageSenderName, deleteMessageByIdThunkCreator} = props

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = event => {
        event.preventDefault();
        event.button === 2 && setIsOpenMenu(!isOpenMenu);
    }

    const deleteMessageById = () => {
        deleteMessageByIdThunkCreator(messageId, dialogIdUrl);
    }

    return <div
        key={messageId}
        className={style.message}
        onContextMenu={openMenu}
        title={'Right click to open menu'}
    >
        <div><b>{messageSenderName}: </b>{messageValue}</div>
        <div className={`${style.menu} ${isOpenMenu && style.menuOpen}`}>
            <button onClick={deleteMessageById} className={'buttonDefault'}>Delete</button>
        </div>
    </div>
}

export default Message
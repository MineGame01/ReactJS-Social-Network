import React, {useState} from 'react'
import ColorLink from "../../../../function/ColorLink/ColorLink";
import style from './Dialog.module.scss'
import {useNavigate} from "react-router-dom";

const Dialog = props => {
    const {dialog} = props

    const navigate = useNavigate()

    const [isOpen, isOpenEdit] = useState(false) //Local state

    const onChangeOpenMenu = event => { //Opening and closing menu
        event.preventDefault() //Blocking browser menu default
        if (event.button === 2 ) isOpenEdit(!isOpen) //Opening a menu by right-clicking
    }

    const onClickToRedirectProfile = () => { //Clicking on dialogs, redirecting to the profile by ID
        return navigate(`/profile/${dialog.id}`)
    }

    return <div className={style.body} title={'Right click to open menu'}>
        <div className={`${style.menu} ${isOpen && style.menuOpen}`}>
            <button
                className={'buttonDefault'}
                onClick={onClickToRedirectProfile}
            >Profile</button>
        </div>
        <div onContextMenu={onChangeOpenMenu}>
            <ColorLink
                to={`/dialogs/${dialog.id}`}
                className={style.dialog}
            >
                <div className={style.image}>
                    <img
                        src={dialog.photos.small || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}
                        alt={dialog.photos.small || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}/>
                    <div className={style.newMessagesCount}>
                        {dialog.newMessagesCount}
                    </div>
                </div>
                {dialog.userName}
            </ColorLink>
        </div>
    </div>
}

export default Dialog
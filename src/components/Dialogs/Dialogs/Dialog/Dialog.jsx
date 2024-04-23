import React, {useState} from 'react'
import style from './Dialog.module.scss'
import {NavLink, useNavigate} from "react-router-dom";

const Dialog = props => {
    const {dialogId, dialogPhotoSmall, dialogNewMessagesCount, dialogUserName} = props;

    const navigate = useNavigate();

    const [isOpenMenu, setIsOpenMenu] = useState(false);

    const openMenu = event => {
        event.preventDefault();
        if (event.button === 2) setIsOpenMenu(!isOpenMenu);
    }

    const redirectToProfile = () => navigate(`/profile/${dialogId}`);

    const defaultImage = 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg';

    return <div className={style.body} title={'Right click to open menu'}>
        <div className={`${style.body__menu} ${isOpenMenu && style.body__menuOpen}`}>
            <button
                className={'buttonDefault'}
                onClick={redirectToProfile}
            >Profile
            </button>
        </div>
        <div onContextMenu={openMenu}>
            <NavLink
                to={`/dialogs/${dialogId}`}
                className={style.body__dialog}
                style={({isActive}) => {
                    return {
                        color: isActive ? "red" : "white"
                    }
                }}
            >
                <div className={style.body__dialog__image}>
                    <img
                        src={dialogPhotoSmall || defaultImage}
                        alt={dialogPhotoSmall || defaultImage}
                    />
                    <div className={style.body__dialog__image__newMessagesCount}>{dialogNewMessagesCount}</div>
                </div>
                {dialogUserName}
            </NavLink>
        </div>
    </div>
}

export default Dialog
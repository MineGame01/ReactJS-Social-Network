import React from "react";
import Style from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    const {
        data, isLoadesAuth,
        AuthExitThunkCreator
    } = props
    return (
        <header className={Style.header}>
            <img src={'https://v.od.ua/uploads/92/logo.png'} alt='logo'/>
            <div className={Style.login}>
                {data.login ? <div>{data.login}</div> : <NavLink to={'/login'}>Login</NavLink>}
                <div className={Style.exitButton}>
                    {
                        data.login ?
                            <button
                                disabled={isLoadesAuth}
                                onClick={() => AuthExitThunkCreator()}
                                className={'buttonDefault'}
                            >Log out</button> : ' '
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
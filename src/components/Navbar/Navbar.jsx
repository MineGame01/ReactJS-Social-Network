import React, {useEffect} from "react";
import Style from './Navbar.module.css'
import NavbarElement from "./NavbarElement/NavbarElement";

const Navbar = (props) => {
    const {isAuth, getDialogsThunkCreator} = props

    useEffect(() => {
        isAuth && getDialogsThunkCreator() //If user authorized, then get all dialogs
    }, [isAuth, getDialogsThunkCreator]);

    const navbarElements = props.urlData.url.map( url =>
        <NavbarElement
            key={url.id}
            name={url.name}
            url={url.url}
            id={url.id}
        />
    )
    return (
        <nav className={Style.nav}>
            {navbarElements}
        </nav>
    )
}

export default Navbar;
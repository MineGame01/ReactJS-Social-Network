import React from "react";
import Style from './Navbar.module.css'
import NavbarElement from "./NavbarElement/NavbarElement";

const Navbar = (props) => {
    let navbarElements = props.urlData.url.map( url =>
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
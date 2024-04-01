import React from "react";
import Style from "../Navbar.module.css";
import ColorLink from "../../../function/ColorLink/ColorLink";

const NavbarElement = (props) => {
    return (
        <div className={Style.item}>
            <ColorLink
                id={props.id}
                to={props.url}
            >
                {props.name}
            </ColorLink>
        </div>
    )
}

export default NavbarElement;
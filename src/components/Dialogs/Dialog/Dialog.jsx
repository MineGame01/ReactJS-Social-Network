import React from "react";
import Style from './../Dialogs.module.css'
import ColorLink from "../../../function/ColorLink/ColorLink";

const Dialog = (props) => {
    const url = '/Messages/' + props.id + '/'
    return (
        <div className={Style.dialog}>
            <ColorLink
                to={url}
            >
                {props.name}
            </ColorLink>
        </div>
    )
}

export default Dialog;
import React from 'react'
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {
    const {dialogs} = props

    return <div>
        {
            dialogs !== null ? dialogs.map(dialog => {
                return <Dialog key={dialog.id} dialog={dialog} />
            }) : 'No dialogs'
        }
    </div>
}

export default Dialogs
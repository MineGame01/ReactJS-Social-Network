import React from 'react'
import Dialog from "./Dialog/Dialog";

const Dialogs = ({dialogs, ...props}) => {
    return <div>
        {
            dialogs !== null ? dialogs.map(dialog => {
                return <Dialog
                    key={dialog.id}
                    dialogId={dialog.id}
                    dialogPhotoSmall={dialog.photos.small}
                    dialogNewMessagesCount={dialog.newMessagesCount}
                    dialogUserName={dialog.userName}
                />
            }) : 'No dialogs'
        }
    </div>
}

export default Dialogs
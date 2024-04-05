import React, {useState} from 'react'
import EditorModeFormRedux from "./StatusEditorForm/StatusEditorForm";

const StatusUserAndStatusEditor = ({authLogin, profileData, putStatusDataThunkCreator, statusData, ...props}) => {
    //Local state
    const [isEditStatus, isChangeModeStatusEdit] = useState(false)

    //Show editing status
    const applyEditModeStatus = () => {
        isChangeModeStatusEdit(true)
    }

    //Hide editing status
    const deapplyEditModeStatus = (value) => {
        isChangeModeStatusEdit(false)
        if (value.editorInput !== statusData) {
            putStatusDataThunkCreator(value.editorInput)
        }
    }
    return <div>
        <span
            onDoubleClick={authLogin !== profileData.fullName ? null : applyEditModeStatus}
        >{statusData}</span>
        {isEditStatus && <EditorModeFormRedux initialValues={{editorInput: statusData}} onSubmit={deapplyEditModeStatus}/>}
    </div>
}

export default StatusUserAndStatusEditor
import React, {useState} from 'react'
import EditorModeFormRedux from "./StatusEditorForm/StatusEditorForm";
import style from './StatusUserAndStatusEditor.module.scss'

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
    return <div className={style.body}>
        <button
            onClick={authLogin !== profileData.fullName ? null : applyEditModeStatus}
            className={style.body__helpButton}
        >
            <span
                style={{
                    color: isEditStatus ? 'red' : 'white',
                    cursor: authLogin !== profileData.fullName ? 'text' : 'pointer'
                }}
            ><b>Status: </b>{statusData}</span>
        </button>
        {isEditStatus &&
            <EditorModeFormRedux initialValues={{editorInput: statusData}} onSubmit={deapplyEditModeStatus}/>}
    </div>
}

export default StatusUserAndStatusEditor
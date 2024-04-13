import React, {useState} from 'react'
import EditorModeFormRedux from "./StatusEditorForm/StatusEditorForm";
import style from './StatusUserAndStatusEditor.module.scss'

const StatusUserAndStatusEditor = ({isAuthUser, profileData, putStatusDataThunkCreator, statusData, ...props}) => {
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
            onClick={(isAuthUser && applyEditModeStatus) || null}
            className={style.body__helpButton}
        >
            <span
                style={{
                    color: isEditStatus ? 'red' : 'white',
                    cursor: isAuthUser ? 'pointer' : 'text'
                }}
            ><b>Status: </b>{statusData}</span>
        </button>
        {isEditStatus &&
            <EditorModeFormRedux initialValues={{editorInput: statusData}} onSubmit={deapplyEditModeStatus}/>}
    </div>
}

export default StatusUserAndStatusEditor
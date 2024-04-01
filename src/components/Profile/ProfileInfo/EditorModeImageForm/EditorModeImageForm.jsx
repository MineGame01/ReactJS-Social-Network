import React from 'react'

const EditorModeImageForm = props => {
    const {deapplyEditModeImage} = props
    return <div>
        <input
            type={'file'}
            className={'textareaDefault'}
            onChange={deapplyEditModeImage}
            style={{width: 300, height: 25}}
        />
    </div>
}

export default EditorModeImageForm
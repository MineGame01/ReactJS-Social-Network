import React from 'react'

const ImageEditorForm = ({deapplyEditModeImage, ...props}) => {
    return <div>
        <input
            type={'file'}
            className={'textareaDefault'}
            onChange={deapplyEditModeImage}
            style={{width: 300, height: 25}}
        />
    </div>
}

export default ImageEditorForm
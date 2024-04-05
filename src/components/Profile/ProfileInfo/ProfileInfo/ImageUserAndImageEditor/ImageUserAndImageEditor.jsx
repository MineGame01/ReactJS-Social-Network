import React, {useState} from 'react'
import style from './ImageUserAndImageEditor.module.scss'
import ImageEditorForm from "./ImageEditorForm/ImageEditorForm";

const ImageUserAndImageEditor = ({authLogin, profileData, putImageThunkCreator, ...props}) => {
    //Local state
    const [isEditImage, isChangeModeImageEdit] = useState(false)

    //Show file selection image
    const applyEditModeImage = () => {
        isChangeModeImageEdit(true)
    }

    //Hide file selection image
    const deapplyEditModeImage = event => {
        isChangeModeImageEdit(false)
        putImageThunkCreator({file: event.target.files[0]})
    }

    return <div>
        <img
            className={style.profileImg}
            onDoubleClick={authLogin !== profileData.fullName ? null : applyEditModeImage}
            src={profileData.photos.large || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}
            alt={profileData.photos.large || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}
        />

        {isEditImage && <ImageEditorForm deapplyEditModeImage={deapplyEditModeImage}/>}
    </div>
}

export default ImageUserAndImageEditor
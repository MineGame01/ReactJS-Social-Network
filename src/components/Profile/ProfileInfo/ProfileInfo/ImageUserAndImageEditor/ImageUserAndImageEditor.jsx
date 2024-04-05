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

    return <div className={style.body}>
        <button
            onClick={authLogin !== profileData.fullName ? null : applyEditModeImage}
            className={authLogin !== profileData.fullName ? null : style.buttonHover}
        >
            <img
                className={style.profileImg}
                src={profileData.photos.large || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}
                alt={profileData.photos.large || 'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'}
            />
        </button>

        {isEditImage && <ImageEditorForm deapplyEditModeImage={deapplyEditModeImage}/>}
    </div>
}

export default ImageUserAndImageEditor
import React, {useState} from "react";
import Style from './ProfileInfo.module.scss'
import EditorModeFormRedux from "./EditorModeStatusForm/EditorModeStatusForm";
import EditorModeImageForm from "./EditorModeImageForm/EditorModeImageForm";
import EditorModeProfileForm from "./EditorModeProfileForm/EditorModeProfileForm";

const ProfileInfo = (props) => {
    const {
        profileData, userID,
        urlIdOrUserId, putProfileDataThunkCreator,
        authLogin, statusData,
        putImageThunkCreator, putStatusDataThunkCreator
    } = props

    //Check for availability
    const contacts = profileData ? profileData.contacts : null
    const notContacts = 'Нет ссылки!'

    //Local state
    const [editorModeStatus, editorModeStatusEditor] = useState(false)
    const [editorModeImage, editorModeImageEditor] = useState(false)
    const [viewContacts, viewContactsEditor] = useState(false)
    const [editorModeProfile, editorModeProfileEditor] = useState(false)

    //Show editing status
    const applyEditModeStatus = () => {
        editorModeStatusEditor(true)
    }

    //Hide editing status
    const deapplyEditModeStatus = (value) => {
        editorModeStatusEditor(false)
        if (value.editorInput !== statusData) {
            putStatusDataThunkCreator(value.editorInput, urlIdOrUserId)
        }
    }

    //Show file selection image
    const applyEditModeImage = () => {
        editorModeImageEditor(true)
    }

    //Hide file selection image
    const deapplyEditModeImage = event => {
        editorModeImageEditor(false)
        putImageThunkCreator({file: event.target.files[0], userID, urlIdOrUserId})
    }

    //Show view contacts
    const applyViewContacts = () => {
        viewContactsEditor(true)
    }

    //Hide view contacts
    const deapplyViewContacts = () => {
        viewContactsEditor(false)
    }

    //Object for profile update
    const updateProfile = value => {
        const {
            fullName, aboutMe, lookingForAJob,
            lookingForAJobDescription, github, vk,
            facebook, instagram, twitter,
            website, youtube, mainLink
        } = value
        const checkedForAvailability = ({checkedValue, defaultValue}) => {
            return checkedValue ? checkedValue : defaultValue
        }
        const object = {
            userId: userID,
            fullName: checkedForAvailability(fullName, profileData.fullName),
            aboutMe: checkedForAvailability(aboutMe, profileData.aboutMe),
            lookingForAJob: checkedForAvailability(lookingForAJob, profileData.lookingForAJob),
            lookingForAJobDescription: checkedForAvailability(lookingForAJobDescription, profileData.lookingForAJobDescription),
            contacts: {
                github: checkedForAvailability(github, profileData.contacts.github),
                vk: checkedForAvailability(vk, profileData.contacts.vk),
                facebook: checkedForAvailability(facebook, profileData.contacts.facebook),
                instagram: checkedForAvailability(instagram, profileData.contacts.instagram),
                twitter: checkedForAvailability(twitter, profileData.contacts.twitter),
                website: checkedForAvailability(website, profileData.contacts.website),
                youtube: checkedForAvailability(youtube, profileData.contacts.youtube),
                mainLink: checkedForAvailability(mainLink, profileData.contacts.mainLink)
            }
        }
        putProfileDataThunkCreator({object, urlIdOrUserId, userID})
    }
    return (
        !profileData ? <></> :
            <div className={Style.body}>
                <div>
                    {authLogin === profileData.fullName &&
                        <div style={{float: "right"}}>
                            {
                                editorModeProfile ?
                                    <button
                                        className={'buttonDefault'}
                                        style={{borderColor: editorModeProfile ? 'red' : 'white'}}
                                        onClick={() => editorModeProfileEditor(false)}
                                    >Изменить профиль: Закрыть</button>
                                    :
                                    <button
                                        className={'buttonDefault'}
                                        onClick={() => editorModeProfileEditor(true)}
                                    >Изменить профиль: Открить</button>
                            }
                            {
                                editorModeProfile &&
                                <EditorModeProfileForm nameContacts={Object.keys(contacts)} onSubmit={updateProfile}/>
                            }
                        </div>
                    }

                    <img
                        className={Style.body__profileImg}
                        onDoubleClick={authLogin !== profileData.fullName ? null : applyEditModeImage}
                        src={profileData.photos.large ?
                            profileData.photos.large :
                            'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'
                        }
                        alt={!profileData.photos.large ?
                            profileData.photos.large :
                            'https://www.shutterstock.com/image-vector/default-avatar-profile-icon-social-600nw-1677509740.jpg'
                        }
                    />

                    {editorModeImage && <EditorModeImageForm deapplyEditModeImage={deapplyEditModeImage}/>}

                    <div className={Style.body__fullName}>{profileData.fullName ? profileData.fullName : 'Нет имени!'}</div>

                    <div>{profileData.aboutMe}</div>

                    <span onDoubleClick={authLogin !== profileData.fullName ? null : applyEditModeStatus}>{statusData}</span>
                    {editorModeStatus && <EditorModeFormRedux onSubmit={deapplyEditModeStatus}/>}

                    <div>
                        <div>Ищет роботу: {profileData.lookingForAJob ? 'Да' : 'Нет'}</div>
                        <div>Описание роботы: {!profileData.lookingForAJobDescription ? 'Нет описание' : profileData.lookingForAJobDescription}</div>
                    </div>

                    {
                        viewContacts ?
                            <button className={'buttonDefault'} onClick={deapplyViewContacts}>Скрыть
                                контакты</button> :
                            <button className={'buttonDefault'} onClick={applyViewContacts}>Показать
                                контакты</button>
                    }

                    {viewContacts && <div className={Style.body__contactsMenu}>
                        <div>Facebook: {contacts.facebook ? contacts.facebook : notContacts}</div>
                        <div>Website: {contacts.website ? contacts.website : notContacts}</div>
                        <div>Vk: {contacts.vk ? contacts.vk : notContacts}</div>
                        <div>Twitter: {contacts.twitter ? contacts.twitter : notContacts}</div>
                        <div>Instagram: {contacts.instagram ? contacts.instagram : notContacts}</div>
                        <div>YouTube: {contacts.youtube ? contacts.youtube : notContacts}</div>
                        <div>GitHUb: {contacts.github ? contacts.github : notContacts}</div>
                        <div>MainLink: {contacts.mainLink ? contacts.mainLink : notContacts}</div>
                    </div>}

                </div>
            </div>
    )
}

export default ProfileInfo;
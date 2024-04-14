import React from 'react'
import style from './UserInformation.module.scss'
import StatusUserAndStatusEditor from "./StatusUserAndStatusEditor/StatusUserAndStatusEditor";

const UserInformation = ({isAuthUser, profileData, putStatusDataThunkCreator, statusData, ...props}) => {
    return <div className={style.body}>
        <div
            className={style.fullName}
        >{profileData.fullName ? profileData.fullName : 'No name'}</div>

        <div><b>About me: </b>{profileData.aboutMe ? profileData.aboutMe : 'No about me'}</div>

        <StatusUserAndStatusEditor
            isAuthUser={isAuthUser}
            profileData={profileData}
            putStatusDataThunkCreator={putStatusDataThunkCreator}
            statusData={statusData}
        />

        <div>
            <div><b>Looking for job:</b> {profileData.lookingForAJob ? 'Yes' : 'No'}</div>
            <div><b>Description of work:</b> {!profileData.lookingForAJobDescription ? 'No description' : profileData.lookingForAJobDescription}</div>
        </div>
    </div>
}

export default UserInformation;
import React from 'react'
import style from './UserInformation.module.scss'
import StatusUserAndStatusEditor from "./StatusUserAndStatusEditor/StatusUserAndStatusEditor";

const UserInformation = ({authLogin, profileData, putStatusDataThunkCreator, statusData, ...props}) => {
    return <div>
        <div
            className={style.fullName}
        >{profileData.fullName ? profileData.fullName : 'No name'}</div>

        <div>{profileData.aboutMe}</div>

        <StatusUserAndStatusEditor
            authLogin={authLogin}
            profileData={profileData}
            putStatusDataThunkCreator={putStatusDataThunkCreator}
            statusData={statusData}
        />

        <div>
            <div>Looking for job: {profileData.lookingForAJob ? 'Yes' : 'No'}</div>
            <div>Description of work: {!profileData.lookingForAJobDescription ? 'No description' : profileData.lookingForAJobDescription}</div>
        </div>
    </div>
}

export default UserInformation;
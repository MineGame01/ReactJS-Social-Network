import React from "react";
import Style from './ProfileInfo.module.scss'
import ProfileEditor from "./ProfileEditor/ProfileEditor";
import ImageUserAndImageEditor from "./ImageUserAndImageEditor/ImageUserAndImageEditor";
import UserInformation from "./UserInformation/UserInformation";
import UserContacts from "./UserContacts/UserContacts";

const ProfileInfo = (props) => {
    const {
        profileData, putProfileDataThunkCreator,
        authLogin, statusData,
        putImageThunkCreator, putStatusDataThunkCreator
    } = props
    return (
        !profileData ? <></> :
            <div className={Style.body}>
                <div>
                    <ProfileEditor
                        authLogin={authLogin}
                        profileData={profileData}
                        putProfileDataThunkCreator={putProfileDataThunkCreator}
                    />

                    <ImageUserAndImageEditor
                        authLogin={authLogin}
                        profileData={profileData}
                        putImageThunkCreator={putImageThunkCreator}
                    />

                    <UserInformation
                        authLogin={authLogin}
                        profileData={profileData}
                        putStatusDataThunkCreator={putStatusDataThunkCreator}
                        statusData={statusData}
                    />

                    <UserContacts
                        profileData={profileData}
                    />
                </div>
            </div>
    )
}

export default ProfileInfo;
import React from "react";
import Style from './ProfileInfo.module.scss'
import ProfileEditor from "./ProfileEditor/ProfileEditor";
import ImageUserAndImageEditor from "./ImageUserAndImageEditor/ImageUserAndImageEditor";
import UserInformation from "./UserInformation/UserInformation";
import UserContacts from "./UserContacts/UserContacts";

const ProfileInfo = (props) => {
    const {
        profileData, putProfileDataThunkCreator,
        isAuthUser, statusData,
        putImageThunkCreator, putStatusDataThunkCreator,
        isChatting, startChattingUserByIdThunkCreator
    } = props
    return (
        !profileData ? <></> :
            <div className={Style.body}>
                <div>
                    <ProfileEditor
                        isAuthUser={isAuthUser}
                        profileData={profileData}
                        putProfileDataThunkCreator={putProfileDataThunkCreator}
                    />

                    <ImageUserAndImageEditor
                        isAuthUser={isAuthUser}
                        profileData={profileData}
                        putImageThunkCreator={putImageThunkCreator}
                    />

                    <UserInformation
                        isAuthUser={isAuthUser}
                        profileData={profileData}
                        putStatusDataThunkCreator={putStatusDataThunkCreator}
                        statusData={statusData}
                    />

                    <UserContacts
                        isAuthUser={isAuthUser}
                        profileData={profileData}
                        isChatting={isChatting}
                        startChattingUserByIdThunkCreator={startChattingUserByIdThunkCreator}
                    />
                </div>
            </div>
    )
}

export default ProfileInfo;
import React from 'react'
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";
import MypostContainer from "./Mypost/MypostContainer";

const Profile = props => {
    return <div>
        <ProfileInfoContainer />
        <MypostContainer />
    </div>
}

export default Profile
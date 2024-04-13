import React, {useEffect, useState} from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getProfileDataThunkCreator, putImageThunkCreator, putProfileDataThunkCreator,
    putStatusDataThunkCreator
} from "../../../redux/Slices/ProfileSlice/ProfileThunkCreator";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {
    getAuthDataState, getDialogsSelector,
    getIsLoadesProfileState,
    getProfileDataState,
    getStatusState,
} from "../../../redux/Selectors/Selectors";
import {useParams} from "react-router-dom";
import Loader from "../../common/Loader/Loader";
import {setUrlIdOrUserId} from "../../../redux/Slices/ProfileSlice/ProfileSlice";
import {
    startChattingUserByIdThunkCreator
} from "../../../redux/Slices/DialogsSlice/DialogsThunkCreator";

const ProfileInfoContainer = props => {
    const {
        profileData, statusData,
        putStatusDataThunkCreator, putImageThunkCreator,
        putProfileDataThunkCreator, authLogin,
        getProfileDataThunkCreator, setUrlIdOrUserId,
        userID, isLoadesProfile, dialogs,
        startChattingUserByIdThunkCreator,
    } = props

    const params = useParams()

    useEffect(() => {
            setUrlIdOrUserId({id: params.userId || userID})
            getProfileDataThunkCreator()
        }, [
            getProfileDataThunkCreator,
            params.userId,
            userID,
            setUrlIdOrUserId,
        ]
    )

    //if in dialogs there so dialog for is which equals id profile user, then return true
    const [isChatting, isChattingEdit] = useState(dialogs && profileData && dialogs.some(element => element.id === profileData.userId))
    useEffect(() => {
        isChattingEdit(dialogs && profileData && dialogs.some(element => element.id === profileData.userId))
    }, [dialogs, profileData]);

    if (isLoadesProfile) return <Loader/>
    return <div>
        <ProfileInfo
            profileData={profileData}
            statusData={statusData}
            putStatusDataThunkCreator={putStatusDataThunkCreator}
            putImageThunkCreator={putImageThunkCreator}
            putProfileDataThunkCreator={putProfileDataThunkCreator}
            authLogin={authLogin}
            isChatting={isChatting}
            startChattingUserByIdThunkCreator={startChattingUserByIdThunkCreator}
        />
    </div>
}

const mapStateToProps = (state) => ({
    isLoadesProfile: getIsLoadesProfileState(state), //Getting value to the profile page loader
    profileData: getProfileDataState(state), //Getting all data profile page
    statusData: getStatusState(state), //Getting status user
    userID: getAuthDataState(state).id, //Getting id to the authorization user
    authLogin: getAuthDataState(state).login, //Getting the 'login' value of an authorized user
    dialogs: getDialogsSelector(state), //Getting all dialogs in the user
})

export default compose(
    connect(mapStateToProps, {
        getProfileDataThunkCreator,
        putStatusDataThunkCreator,
        putImageThunkCreator,
        putProfileDataThunkCreator,
        setUrlIdOrUserId,
        startChattingUserByIdThunkCreator
    }),
    WithAuthRedirect
)(ProfileInfoContainer)
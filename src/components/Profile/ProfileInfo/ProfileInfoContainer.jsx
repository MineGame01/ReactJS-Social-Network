import React, {useEffect} from 'react'
import ProfileInfo from "./ProfileInfo";
import {compose} from "redux";
import {connect} from "react-redux";
import {
    getProfileDataThunkCreator, putImageThunkCreator, putProfileDataThunkCreator,
    putStatusDataThunkCreator
} from "../../../redux/Slices/ProfileSlice/ProfileThunkCreator";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {
    getAuthDataState,
    getIsLoadesProfileState,
    getProfileDataState,
    getStatusState
} from "../../../redux/Selectors/Selectors";
import {useParams} from "react-router-dom";
import Loader from "../../Loader/Loader";
import {setUrlIdOrUserId} from "../../../redux/Slices/ProfileSlice/ProfileSlice";

const ProfileInfoContainer = props => {
    const {
        profileData, statusData,
        putStatusDataThunkCreator, putImageThunkCreator,
        putProfileDataThunkCreator, authLogin,
        getProfileDataThunkCreator, setUrlIdOrUserId,
        userID
    } = props

    const params = useParams()
    useEffect(() => {
        setUrlIdOrUserId({id: params.userId || userID})
        getProfileDataThunkCreator()
    }, [getProfileDataThunkCreator, params.userId, userID, setUrlIdOrUserId])

    return <div>
        {props.isLoadesProfile ? <Loader /> : <ProfileInfo
            profileData={profileData}
            statusData={statusData}
            putStatusDataThunkCreator={putStatusDataThunkCreator}
            putImageThunkCreator={putImageThunkCreator}
            putProfileDataThunkCreator={putProfileDataThunkCreator}
            authLogin={authLogin}
        />}
    </div>
}

const mapStateToProps = (state) => ({
    //Getting value to the profile page loader
    isLoadesProfile: getIsLoadesProfileState(state),
    //Getting all data profile page
    profileData: getProfileDataState(state),
    //Getting status user
    statusData: getStatusState(state),
    //Getting id to the authorization user
    userID: getAuthDataState(state).id,
    //Getting the 'login' value of an authorized user
    authLogin: getAuthDataState(state).login
})

export default compose(
    connect(mapStateToProps, {
        getProfileDataThunkCreator,
        putStatusDataThunkCreator,
        putImageThunkCreator,
        putProfileDataThunkCreator,
        setUrlIdOrUserId
    }),
    WithAuthRedirect
)(ProfileInfoContainer)
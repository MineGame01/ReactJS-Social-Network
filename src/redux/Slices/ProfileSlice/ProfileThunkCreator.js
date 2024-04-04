import {ProfileAPI} from "../../../api/ProfileAPI";
import {getProfileData, getStatusData, toLoadesProfile} from "./ProfileSlice";
import {stopSubmit} from "redux-form";

//Start preloader
const startLoaderProfile = toLoadesProfile({boolean: true})
//Stop preloader
const stopLoaderProfile = toLoadesProfile({boolean: false})

//Send user image change
export const putImageThunkCreator = ({file, userID, urlIdOrUserId}) => async dispatch => {
    //Send image
    let data = await ProfileAPI.putImage(file)
    if (data.resultCode === 0) {
        //If successful, get all profile data. Update profile data
        await dispatch(getProfileDataThunkCreator(urlIdOrUserId, userID))
        alert('Change successful!')
    } else {
        //If error, return error
        const messages = data.messages > 0 ? data.messages[0] : 'Unknown error!'
        alert(messages)
    }
}

//Retrieves all data for the profilePage
export const getProfileDataThunkCreator = (urlId, userID) => async dispatch => {
    //Start preloader
    dispatch(startLoaderProfile)

    //Checks for availability for urlId or userID
    const id = !urlId ? userID : urlId

    //Send request to the API
    const ProfileData = await ProfileAPI.getProfile(id)
    const StatusData = await ProfileAPI.getStatus(id)

    //Waiting response from API request
    const response = await Promise.all([ProfileData, StatusData])
    //Checks 'response' for not empty
    !response ? alert('Loading data user is the error!') : dispatch(getProfileData({data: ProfileData}))
    //Checks 'StatusData' for not empty
    StatusData ? dispatch(getStatusData({statusData: StatusData})) : dispatch(getStatusData({statusData: 'No status'}))
    //Stop preloader
    dispatch(stopLoaderProfile)
}

//Send status change
export const putStatusDataThunkCreator = (newStatusData, urlIdOrUserId) => async (dispatch) => {
    //Start preloader
    dispatch(startLoaderProfile)
    //Send status
    const data = await ProfileAPI.putStatus(newStatusData)
    if (data.resultCode === 0) {
        //If successful, get Status
        const dataStatus = await ProfileAPI.getStatus(urlIdOrUserId)
        if (dataStatus) {
            //If successful, update status
            dispatch(getStatusData({statusData: dataStatus}))
            alert('Change successful!')
            //Stop preloader
            dispatch(stopLoaderProfile)
        } else {
            //If error, return error
            alert('Change successful!')
            //Stop preloader
            dispatch(stopLoaderProfile)
        }
    } else {
        //If error, return error
        alert('Change error!')
        //Stop preloader
        dispatch(stopLoaderProfile)
    }
}

//Send profile change
export const putProfileDataThunkCreator = (props) => async dispatch => {
    const {urlIdOrUserId, userID, object} = props

    //Start preloader
    dispatch(startLoaderProfile)
    const data = await ProfileAPI.putProfileData(object)
    if (data.resultCode === 0) {
        await dispatch(getProfileDataThunkCreator(urlIdOrUserId, userID))
        alert('Change successful!')
        //Stop preloader
        dispatch(stopLoaderProfile)
    } else {
        dispatch(stopSubmit('EditProfile', {_error: data.messages}))
        alert('Change error!')
        //Stop preloader
        dispatch(stopLoaderProfile)
    }
}
import {ProfileAPI} from "../../../api/ProfileAPI";
import {getProfileData, getStatusData, toLoadesProfile} from "./ProfileSlice";
import {stopSubmit} from "redux-form";

//Start preloader
const startLoaderProfile = toLoadesProfile({boolean: true})
//Stop preloader
const stopLoaderProfile = toLoadesProfile({boolean: false})

//Sending user image
export const putImageThunkCreator = ({file}) => async dispatch => {
    //Send image
    let data = await ProfileAPI.putImage(file)
    if (data.resultCode === 0) {
        //If successful, get all profile data. Update profile data
        await dispatch(getProfileDataThunkCreator())
        alert('Change successful!')
    } else {
        //If error, return error
        const messages = data.messages > 0 ? data.messages[0] : 'Unknown error!'
        alert(messages)
    }
}

//Retrieves all data for the profilePage
export const getProfileDataThunkCreator = () => async (dispatch, getState) => {
    //Start preloader
    dispatch(startLoaderProfile)

    //Getting user id or id for other user
    const urlIdOrUserId = getState().profilePage.urlIdOrUserId

    //Send request to the API
    const ProfileData = await ProfileAPI.getProfile(urlIdOrUserId)
    const StatusData = await ProfileAPI.getStatus(urlIdOrUserId)

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
export const putStatusDataThunkCreator = (newStatusData) => async (dispatch, getState) => {
    //Start preloader
    dispatch(startLoaderProfile)

    //Getting user id or id for other user
    const urlIdOrUserId = getState().profilePage.urlIdOrUserId

    //Sending status user data to the server
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
export const putProfileDataThunkCreator = ({object}) => async dispatch => {
    //Start preloader
    dispatch(startLoaderProfile)

    //Sending profile data to the server
    const data = await ProfileAPI.putProfileData(object)
    if (data.resultCode === 0) {
        //If sending request is the successful, than reloading profile data
        await dispatch(getProfileDataThunkCreator())
        alert('Change successful!')
        //Stop preloader
        dispatch(stopLoaderProfile)
    } else {
        //If after sending request came back error response, then send this error to form
        dispatch(stopSubmit('EditProfile', {_error: data.messages}))
        alert('Change error!')
        //Stop preloader
        dispatch(stopLoaderProfile)
    }
}
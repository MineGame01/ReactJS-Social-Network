import {ProfileAPI} from "../../../api/ProfileAPI";
import {getProfileData, getStatusData, toLoadesProfile} from "./ProfileSlice";
import {stopSubmit} from "redux-form";
import {setGlobalError} from "../AppSlice/AppSlice";

const startLoaderProfile = toLoadesProfile({boolean: true});
const stopLoaderProfile = toLoadesProfile({boolean: false});

export const putImageThunkCreator = ({file}) => async dispatch => {
    dispatch(startLoaderProfile);
    try {
        let data = await ProfileAPI.putImage(file);
        if (data.resultCode === 0) {
            await dispatch(getProfileDataThunkCreator());
        }
        dispatch(stopLoaderProfile);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoaderProfile);
    }
}

export const getProfileDataThunkCreator = () => async (dispatch, getState) => {
    dispatch(startLoaderProfile);
    const urlIdOrUserId = getState().profilePage.urlIdOrUserId
    try {
        const ProfileData = await ProfileAPI.getProfile(urlIdOrUserId);
        const StatusData = await ProfileAPI.getStatus(urlIdOrUserId);
        await Promise.all([ProfileData, StatusData]);
        dispatch(getProfileData({data: ProfileData}));
        StatusData ? dispatch(getStatusData({statusData: StatusData})) : dispatch(getStatusData({statusData: 'No status'}));
        dispatch(stopLoaderProfile);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoaderProfile);
    }
}

export const putStatusDataThunkCreator = (newStatusData) => async (dispatch, getState) => {
    dispatch(startLoaderProfile);
    const urlIdOrUserId = getState().profilePage.urlIdOrUserId
    try {
        const data = await ProfileAPI.putStatus(newStatusData);
        if (data.resultCode === 0) {
            const dataStatus = await ProfileAPI.getStatus(urlIdOrUserId);
            dispatch(getStatusData({statusData: dataStatus}));
        }
        dispatch(stopLoaderProfile);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoaderProfile);
    }
}

export const putProfileDataThunkCreator = ({object}) => async dispatch => {
    dispatch(startLoaderProfile);
    try {
        const data = await ProfileAPI.putProfileData(object);
        if (data.resultCode === 0) {
            await dispatch(getProfileDataThunkCreator());
        } else {
            dispatch(stopSubmit('EditProfile', {_error: data.messages}));
        }
        dispatch(stopLoaderProfile);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoaderProfile);
    }
}
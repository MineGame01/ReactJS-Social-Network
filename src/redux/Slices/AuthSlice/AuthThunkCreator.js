import {SecurityAPI} from "../../../api/SecurityAPI";
import {AuthAPI} from "../../../api/AuthAPI";
import {stopSubmit} from "redux-form";
import {getAuthData, getUrlCaptcha, toAuth, toIsLoadesAuth} from "./AuthSlice";
import {setGlobalError} from "../AppSlice/AppSlice";

const startLoades = toIsLoadesAuth({booleanLoades: true});
const stopLoades = toIsLoadesAuth({booleanLoades: false});

export const getUrlCaptchaThunkCreator = () => async dispatch => {
    dispatch(startLoades);
    try {
        const data = await SecurityAPI.getImgCaptcha();
        dispatch(getUrlCaptcha({url: data.url}));
        dispatch(stopLoades);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoades);
    }
}

export const AuthLoginThunkCreator = LoginData => async dispatch => {
    dispatch(startLoades);
    try {
        const responseData = await AuthAPI.AuthLogin(LoginData);
        const messages = responseData.messages.length > 0 ? responseData.messages[0] : 'Unknown error!'
        if (responseData.resultCode === 0) {
            await dispatch(userAuthThunkCreator());
        } else if (responseData.resultCode === 10) {
            await dispatch(getUrlCaptchaThunkCreator());
            dispatch(stopSubmit('login', {_error: messages}));
        } else {
            dispatch(stopSubmit('login', {_error: messages}));
        }
        dispatch(stopLoades);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoades);
    }
}

export const AuthExitThunkCreator = () => async dispatch => {
    dispatch(startLoades);
    try {
        const responseData = await AuthAPI.AuthExit();
        if (responseData.resultCode === 0) {
            dispatch(getAuthData({
                email: null,
                id: null,
                login: null
            }));
            dispatch(toAuth({boolean: false}));
        }
        dispatch(stopLoades);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoades);
    }
}

//Authorization when entering the page
export const userAuthThunkCreator = () => async dispatch => {
    try {
        const responseData = await AuthAPI.UserAuth();
        const {email, id, login} = responseData.data
        if (responseData.resultCode === 0) {
            dispatch(getAuthData({
                email: email,
                id: id,
                login: login
            }))
            dispatch(toAuth({boolean: true}));
        }
    } catch (error) {
        dispatch(setGlobalError({error: error}));
    }
}
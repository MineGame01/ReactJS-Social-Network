import {SecurityAPI} from "../../../api/SecurityAPI";
import {AuthAPI} from "../../../api/AuthAPI";
import {stopSubmit} from "redux-form";
import {getAuthData, getUrlCaptcha, toAuth, toIsLoadesAuth} from "./AuthSlice";

//Stop preloader
const stopLoades = toIsLoadesAuth({booleanLoades: false})
//Start preloader
const startLoades = toIsLoadesAuth({booleanLoades: true})

//Get image captcha, for the from login
export const getUrlCaptchaThunkCreator = () => async dispatch => {
    const data = await SecurityAPI.getImgCaptcha()
    dispatch(getUrlCaptcha({url: data.url}))
}

//Authorization from the login form
export const AuthLoginThunkCreator = LoginData => async dispatch => {
    dispatch(startLoades)
    //Sending data from the form login
    const responseData = await AuthAPI.AuthLogin(LoginData)
    const messages = responseData.messages.length > 0 ? responseData.messages[0] : 'Unknown error!'
    if (responseData.resultCode === 0) {
        //If successful then sending request to login
        dispatch(userAuthThunkCreator())
        dispatch(stopLoades)
    } else {
        //If there is an error, send the error to the login form
        dispatch(stopSubmit('login', {_error: messages}))
        dispatch(stopLoades)
    }
}

//Log out of the authorization
export const AuthExitThunkCreator = () => async dispatch => {
    dispatch(startLoades)
    const responseData = await AuthAPI.AuthExit()
    if (responseData.resultCode === 0) {
        //If successful, then reset authorization data to default
        dispatch(getAuthData({
            email: null,
            id: null,
            login: null
        }))
        dispatch(toAuth({boolean: false}))
        dispatch(stopLoades)
    } else {
        //If error, to return error
        alert(`Account logout error!`)
        dispatch(stopLoades)
    }
}

//Authorization when entering the page
export const userAuthThunkCreator = () => async dispatch => {
    const responseData = await AuthAPI.UserAuth()
    const {email, id, login} = responseData.data
    if (responseData.resultCode === 0) {
        //If successful, send information from the request
        dispatch(getAuthData({
            email: email,
            id: id,
            login: login
        }))
        dispatch(toAuth({boolean: true}))
    }
}
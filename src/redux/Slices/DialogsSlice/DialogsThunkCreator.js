import {getDialogs, getMessagesUserById, isLoaderDialogsPage} from "./DialogsSlice";
import {DialogsAPI} from "../../../api/DialogsAPI";
import {stopSubmit} from "redux-form";
import {setGlobalError} from "../AppSlice/AppSlice";

const startLoader = isLoaderDialogsPage({boolean: true});
const stopLoader = isLoaderDialogsPage({boolean: false});

export const getDialogsThunkCreator = () => async dispatch => {
    dispatch(startLoader);
    try {
        const dialogs = await DialogsAPI.getDialogs();
        dispatch(getDialogs({dialogs: dialogs}));
        dispatch(stopLoader);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoader);
    }
}

export const getMessagesByIdThunkCreator = userId => async dispatch => {
    dispatch(startLoader);
    try {
        const messages = await DialogsAPI.getMessagesUserById(userId);
        dispatch(getMessagesUserById({messages: messages}));
        dispatch(stopLoader);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoader);
    }
}

export const sendMessageUserByIdThunkCreator = (dialogId, message) => async dispatch => {
    dispatch(startLoader);
    try {
        const data = await DialogsAPI.sendMessageUserById(dialogId, message);
        if (data.resultCode !== 0) {
            const message = data.message > 0 ? data.message[0] : 'Unknown error!'
            dispatch(stopSubmit('MessagesForm', {_error: message}));
        }
        await dispatch(getMessagesByIdThunkCreator(dialogId));
        dispatch(stopLoader);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoader);
    }
}

export const deleteMessageByIdThunkCreator = (messageId, userId) => async dispatch => {
    dispatch(startLoader);
    try {
        await DialogsAPI.deleteMessageById(messageId);
        await dispatch(getMessagesByIdThunkCreator(userId));
        dispatch(stopLoader);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoader);
    }
}

export const startChattingUserByIdThunkCreator = userId => async dispatch => {
    try {
        await DialogsAPI.startChattingUserById(userId);
        await dispatch(getDialogsThunkCreator());
    } catch (error) {
        dispatch(setGlobalError({error: error}));
    }
}
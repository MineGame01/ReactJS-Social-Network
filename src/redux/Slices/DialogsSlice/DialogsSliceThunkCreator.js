import {getDialogs, getMessagesUserById, isLoaderDialogsPage} from "./DialogsSlice";
import {DialogsAPI} from "../../../api/DialogsAPI";
import {stopSubmit} from "redux-form";

const startLoader = isLoaderDialogsPage({boolean: true}) //Starting loading page
const stopLoader = isLoaderDialogsPage({boolean: false}) //Stopping loading page

//Getting all dialogs
export const getDialogsThunkCreator = () => async dispatch => {
    dispatch(startLoader) //Starting loading page

    const dialogs = await DialogsAPI.getDialogs() //Send request to API
    dispatch(getDialogs({dialogs: dialogs}))  //After response send all dialogs to state
    dispatch(stopLoader) //Stopping loading page
}

//Getting all user messages by ID
export const getMessagesByIdThunkCreator = userId => async dispatch => {
    dispatch(startLoader) //Starting loading page

    const messages = await DialogsAPI.getMessagesUserById(userId) //Send request to API
    dispatch(getMessagesUserById({messages: messages})) //After response send all messages to state
    dispatch(stopLoader) //Stopping loading page
}

//Send message user by ID
export const sendMessageUserByIdThunkCreator = (dialogId, message) => async dispatch => {
    dispatch(startLoader) //Starting loading page

    const data = await DialogsAPI.sendMessageUserById(dialogId, message) //Send request to API
    if (data.resultCode !== 0) {
        const message = data.message > 0 ? data.message[0] : 'Unknown error!' //If error is not found, response 'Unknown error!'
        dispatch(stopSubmit('MessagesForm', {_error: message})) //Send error to the form
    }
    dispatch(getMessagesByIdThunkCreator(dialogId)) //Getting all messages user by ID
    dispatch(stopLoader) //Stopping loading page
}

//Delete message by ID
export const deleteMessageByIdThunkCreator = (messageId, userId) => async dispatch => {
    dispatch(startLoader) //Starting loading page

    await DialogsAPI.deleteMessageById(messageId) //Send request to API
    dispatch(getMessagesByIdThunkCreator(userId)) //Getting all messages user by ID
    dispatch(stopLoader) //Stopping loading page
}

//Start chatting user by ID
export const startChattingUserByIdThunkCreator = userId => async dispatch => {
    await DialogsAPI.startChattingUserById(userId) //Send request to API
    dispatch(getDialogsThunkCreator()) //Update dialogs
}
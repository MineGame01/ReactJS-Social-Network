import {createSlice} from "@reduxjs/toolkit";

const DialogsSlice = createSlice({
    name: 'DialogsPage',
    initialState: {
        dialogs: null, //All dialogs
        messages: null, //All messages
        isLoaderDialogsPage: false, //Dialogue page is loaded?,
    },
    reducers: {
        getDialogs(state, action) { //Get all dialogs
            state.dialogs = action.payload.dialogs
        },
        isLoaderDialogsPage(state, action) { //Set is loaded
            state.isLoaderDialogsPage = action.payload.boolean
        },
        getMessagesUserById(state, action) { //Getting all messages user by ID
            state.messages = [...action.payload.messages.items]
        },
    }
})

export const {
    getDialogs,
    isLoaderDialogsPage,
    getMessagesUserById,
} = DialogsSlice.actions
export default DialogsSlice.reducer
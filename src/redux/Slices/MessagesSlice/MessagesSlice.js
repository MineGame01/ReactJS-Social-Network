import {createSlice} from "@reduxjs/toolkit";

const MessageSlice = createSlice({
    name: 'messagesPage',
    initialState: {
        messagesData: [
            {id: 1, message: 'User', my: false},
            {id: 2, message: 'Me', my: true},
            {id: 3, message: 'User', my: false},
            {id: 4, message: 'Me', my: true},
        ],
        dialogsData: [
            {id: 1, name: 'Misha'},
            {id: 2, name: 'Klyuchka'},
            {id: 3, name: 'Andrey'}
        ],
    },
    reducers: {
        addMessage(state, action) {
            const message = {
                id: 5,
                message: action.payload.newMessage,
                my: false
            }
            state.messagesData.push(message)
        }
    }
})

export const {addMessage} = MessageSlice.actions
export default MessageSlice.reducer
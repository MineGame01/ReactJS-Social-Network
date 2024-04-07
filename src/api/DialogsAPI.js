import {defaultConfig} from "./defaultConfigAPI";

export const DialogsAPI = {
    getDialogs() { //Getting all dialogs
        return defaultConfig.get(`/dialogs`).then(response => response.data)
    },
    startChattingUserById(userId) { //Starting chatting by ID
        return defaultConfig.put(`/dialogs/${userId}`).then(response => response.data)
    },
    getMessagesUserById(userId) { //Getting all messages user by ID
        return defaultConfig.get(`/dialogs/${userId}/messages`).then(response => response.data)
    },
    sendMessageUserById(dialogId, message) { //Sending messages user by ID
        return defaultConfig.post(`/dialogs/${dialogId}/messages`, {body: message}).then(response => response.data)
    },
    deleteMessageById(messageId) { //Deleting message by ID
        return defaultConfig.delete(`/dialogs/messages/${messageId}`)
    }
}
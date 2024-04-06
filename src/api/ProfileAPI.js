import {defaultConfig} from "./defaultConfigAPI";

export const ProfileAPI = {
    getProfile(userID) {
        return defaultConfig.get(`/profile/${userID}`)
            .then(response => response.data)
    },
    getStatus(userID) {
        return defaultConfig.get(`/profile/status/${userID}`)
            .then(response => response.data)
    },
    putStatus(status) {
        return defaultConfig.put(`/profile/status`, {status})
            .then(response => response.data)
    },
    putImage(fileImage) {
        return defaultConfig.put(`/profile/photo`, {image: fileImage}, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => response.data)
    },
    putProfileData(object) {
        return defaultConfig.put(`/profile`, object).then(response => response.data)
    }
}
import axios from "axios";

const defaultConfig = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
    withCredentials: true,
    headers: {
        "API-KEY": "1f84f6e8-b356-4dde-b9c0-fd88b14d48cd"
    },
})

export const ProfileAPI = {
    getProfile(userID) {
        return defaultConfig.get(`${userID}`)
            .then(response => response.data)
    },
    getStatus(userID) {
        return defaultConfig.get(`status/${userID}`)
            .then(response => response.data)
    },
    putStatus(status) {
        return defaultConfig.put(`status`, {status})
            .then(response => response.data)
    },
    putImage(fileImage) {
        return defaultConfig.put(`photo`, {image: fileImage}, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then(response => response.data)
    },
    putProfileData(object) {
        return defaultConfig.put(``, {...object}).then(response => response.data)
    }
}
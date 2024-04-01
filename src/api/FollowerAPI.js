import axios from "axios";

const defaultConfig = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/follow/',
    withCredentials: true,
    headers: {
        "API-KEY": "1f84f6e8-b356-4dde-b9c0-fd88b14d48cd"
    },
})

export const FollowerAPI = {
    setFollower(userID) {
        return defaultConfig.post(`${userID}`,)
            .then(response => response.data)
    },
    deleteFollower(userID) {
        return defaultConfig.delete(`${userID}`)
            .then(response => response.data)
    }
}
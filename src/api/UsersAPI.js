import axios from "axios";

const defaultConfig = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/users',
    withCredentials: true,
    headers: {
        "API-KEY": "1f84f6e8-b356-4dde-b9c0-fd88b14d48cd"
    },
})

export const UsersAPI = {
    getUsers(PageNumber, SearchText) {
        return defaultConfig.get(`?page=${PageNumber}&term=${SearchText}`)
            .then(response => response.data)
    }
}
import axios from "axios";

export const defaultConfig = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        "API-KEY": "1f84f6e8-b356-4dde-b9c0-fd88b14d48cd"
    },
})
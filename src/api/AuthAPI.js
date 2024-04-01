import axios from "axios";

const defaultConfig = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/',
    withCredentials: true,
    headers: {
        "API-KEY": "1f84f6e8-b356-4dde-b9c0-fd88b14d48cd"
    },
})

export const AuthAPI = {
    UserAuth() {
        return defaultConfig.get(`me`)
            .then(response => response.data)
    },
    AuthLogin(LoginData) {
        return defaultConfig.post(`login`, {
            email: LoginData.email,
            password: LoginData.password,
            rememberMe: LoginData.rememberMe,
            captcha: LoginData.captcha

        })
            .then(response => response.data)
    },
    AuthExit() {
        return defaultConfig.delete(`login`)
            .then(response => response.data)
    }
}
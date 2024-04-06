import {defaultConfig} from "./defaultConfigAPI";

export const AuthAPI = {
    UserAuth() {
        return defaultConfig.get(`/auth/me`)
            .then(response => response.data)
    },
    AuthLogin(LoginData) {
        return defaultConfig.post(`/auth/login`, {
            email: LoginData.email,
            password: LoginData.password,
            rememberMe: LoginData.rememberMe,
            captcha: LoginData.captcha

        })
            .then(response => response.data)
    },
    AuthExit() {
        return defaultConfig.delete(`/auth/login`)
            .then(response => response.data)
    }
}
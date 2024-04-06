import {defaultConfig} from "./defaultConfigAPI";

export const SecurityAPI = {
    getImgCaptcha() {
        return defaultConfig.get(`/security/get-captcha-url`)
            .then(response => response.data)
    }
}
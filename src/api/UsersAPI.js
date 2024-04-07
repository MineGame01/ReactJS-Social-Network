import {defaultConfig} from "./defaultConfigAPI";

export const UsersAPI = {
    getUsers(PageNumber, SearchText) {
        return defaultConfig.get(`/users?page=${PageNumber}&term=${SearchText}`)
            .then(response => response.data)
    }
}
import {defaultConfig} from "./defaultConfigAPI";

export const FollowerAPI = {
    setFollower(userID) {
        return defaultConfig.post(`/follow/${userID}`,)
            .then(response => response.data)
    },
    deleteFollower(userID) {
        return defaultConfig.delete(`/follow/${userID}`)
            .then(response => response.data)
    }
}
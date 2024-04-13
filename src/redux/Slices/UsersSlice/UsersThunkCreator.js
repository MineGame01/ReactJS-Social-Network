import {UsersAPI} from "../../../api/UsersAPI";
import {FollowerAPI} from "../../../api/FollowerAPI";
import {setFollower, getData, getTotalCount, toFollowing, toLoades, deleteFollower} from "./UsersSlice";
import {setGlobalError} from "../AppSlice/AppSlice";

const startLoaderUsers = toLoades({boolean: true});
const stopLoaderUsers = toLoades({boolean: false});

export const getUserThunkCreator = (PageNumber, SearchText) => async dispatch => {
    dispatch(startLoaderUsers);
    try {
        const data = await UsersAPI.getUsers(PageNumber, SearchText)
        if (data) {
            dispatch(getData({data: data.items}));
            dispatch(getTotalCount({count: data.totalCount}));
        }
        dispatch(stopLoaderUsers);
    } catch (error) {
        dispatch(setGlobalError({error: error}));
        dispatch(stopLoaderUsers);
    }
}

export const toggleFollowerStatus = (userId, method) => async dispatch => {
    let apiMethod, actionMethod
    if (method === 'set') {
        apiMethod = FollowerAPI.setFollower.bind(FollowerAPI);
        actionMethod = setFollower
    } else if (method === 'delete') {
        apiMethod = FollowerAPI.deleteFollower.bind(FollowerAPI);
        actionMethod = deleteFollower
    } else {
        return
    }
    dispatch(toFollowing({userID: userId, boolean: true}));
    try {
        const data = await apiMethod(userId);
        if (data.resultCode === 0) {
            dispatch(actionMethod({id: userId}));
            dispatch(toFollowing({userID: userId, boolean: false}));
        }
    } catch (error) {
        dispatch(setGlobalError({error: error}));
    }
}
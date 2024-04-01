import {UsersAPI} from "../../../api/UsersAPI";
import {FollowerAPI} from "../../../api/FollowerAPI";
import {setFollower, getData, getTotalCount, toFollowing, toLoades, deleteFollower} from "./UsersSlice";

//Start preloader
const startLoaderUsers = toLoades({boolean: true})
//Stop preloader
const stopLoaderUsers = toLoades({boolean: false})

//Receives all users
export const getUserThunkCreator = (PageNumber, SearchText) => async dispatch => {
    //Start preloader
    dispatch(startLoaderUsers)
    //Send request to the API
    const data = await UsersAPI.getUsers(PageNumber, SearchText)
    //If response is successful, then save data
    if (data) {
        //Saving data
        dispatch(getData({data: data.items}))
        dispatch(getTotalCount({count: data.totalCount}))
        //Stop preloader
        dispatch(stopLoaderUsers)
    }
}

//Toggle follower status user per id
export const toggleFollowerStatus = (userId, method) => async dispatch => {
    //Create let operator
    let apiMethod, actionMethod

    if (method === 'set') {
        //If parameter is 'set', then subscribe user
        apiMethod = FollowerAPI.setFollower.bind(FollowerAPI)
        actionMethod = setFollower
    } else if (method === 'delete') {
        //If parameter is 'delete', then unsubscribe user
        apiMethod = FollowerAPI.deleteFollower.bind(FollowerAPI)
        actionMethod = deleteFollower
    } else {
        //If after request return error, stop performance
        return
    }

    //Send user id to pending
    dispatch(toFollowing({userID: userId, boolean: true}))

    //Send request to api
    try {
        const data = await apiMethod(userId)
        if (data.resultCode === 0) {
            //If the request is successful, then change the followed parameter, in the object to 'true'
            dispatch(actionMethod({id: userId}))
            //Stop pending the user id
            dispatch(toFollowing({userID: userId, boolean: false}))
        } else {
            //If the request return error, then send to the console error the error
            console.error('Failed to toggle follower status')
        }
    } catch (error) {
        //If after sending request to api return error, then send to the console error the error
        console.error('An error occurred: ', error)
    }
}
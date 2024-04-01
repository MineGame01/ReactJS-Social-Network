import {userAuthThunkCreator} from "../AuthSlice/AuthThunkCreator";
import {setInitilization} from "./AppSlice";

//Initialization application
export const InitilizationThunkCreator = () => async dispatch => {
    //Sending request to authentication
    const userAuth = await dispatch(userAuthThunkCreator())
    await Promise.all([userAuth])
    //If request return successful, to application successfully completed initialization
    dispatch(setInitilization())
}
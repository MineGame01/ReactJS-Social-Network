import {userAuthThunkCreator} from "../AuthSlice/AuthThunkCreator";
import {setGlobalError, setInitilization} from "./AppSlice";

export const InitilizationThunkCreator = () => async dispatch => {
    try {
        const userAuth = await dispatch(userAuthThunkCreator());
        await Promise.all([userAuth]);
        dispatch(setInitilization());
    } catch (error) {
        dispatch(setGlobalError({error: error}));
    }
}
import {createSlice} from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name: 'AuthData',
    initialState: {
        data: {
            email: null,
            id: null,
            login: null
        },
        isAuth: false,
        urlCaptcha: null,
        isLoadesAuth: false
    },
    reducers: {
        getAuthData(state, action) {
            state.data = ({...action.payload})
        },
        getUrlCaptcha(state, action) {
            state.urlCaptcha = action.payload.url
        },
        toAuth(state, action) {
            state.isAuth = action.payload.boolean
        },
        toIsLoadesAuth(state, action) {
            state.isLoadesAuth = action.payload.booleanLoades
        }
    }
})

export const {
    getAuthData,
    getUrlCaptcha,
    toAuth,
    toIsLoadesAuth
} = AuthSlice.actions

export default AuthSlice.reducer
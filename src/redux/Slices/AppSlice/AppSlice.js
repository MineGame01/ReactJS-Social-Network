import {createSlice} from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'app',
    initialState: {
        initilization: false,
        globalErrors: null
    },
    reducers: {
        setInitilization(state, action) {
            state.initilization = true
        },
        setGlobalError(state, action) {
            state.globalErrors = action.payload.error
        },
        clearAllGlobalErrors(state, action) {
            state.globalErrors = null
        }
    }
})

export const {
    setInitilization,
    setGlobalError,
    clearAllGlobalErrors
} = AppSlice.actions
export default AppSlice.reducer
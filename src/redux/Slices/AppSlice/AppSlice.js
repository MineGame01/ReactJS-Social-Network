import {createSlice} from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name: 'app',
    initialState: {
        initilization: false
    },
    reducers: {
        setInitilization(state, action) {
            state.initilization = true
        }
    }
})

export const {setInitilization} = AppSlice.actions
export default AppSlice.reducer
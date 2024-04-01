import {createSlice} from "@reduxjs/toolkit";

const UrlSlice = createSlice({
    name: 'urlData',
    initialState: {
        url: [
            {id: 1, name: 'Profile', url: '/profile/', element: '<Profile />'},
            {id: 2, name: 'Messages', url: '/Messages/', element: '<DialogsContainer />'},
            {id: 3, name: 'Users', url: '/users/', element: '<UsersContainer />'},
            {id: 4, name: 'News', url: '/news/', element: '<News />'},
            {id: 5, name: 'Music', url: '/music/', element: '<Music />'},
            {id: 6, name: 'Settings', url: '/settings/', element: '<Settings />'},
        ]
    },
    reducers: {

    }
})

export default UrlSlice.reducer;
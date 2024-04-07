import {createSlice} from "@reduxjs/toolkit";

const UrlSlice = createSlice({
    name: 'urlData',
    initialState: {
        url: [
            {id: 1, name: 'Profile', url: '/profile/'},
            {id: 2, name: 'Messages', url: '/dialogs/'},
            {id: 3, name: 'Users', url: '/users/'},
            {id: 4, name: 'News', url: '/news/'},
            {id: 5, name: 'Music', url: '/music/'},
            {id: 6, name: 'Settings', url: '/settings/'},
        ]
    },
    reducers: {

    }
})

export default UrlSlice.reducer;
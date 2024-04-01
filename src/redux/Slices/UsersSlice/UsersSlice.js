import {createSlice} from "@reduxjs/toolkit";
import {modifyArray} from "../../../Utils/modifyArray/modifyArray";

const UsersSlice = createSlice({
    name: 'UsersPage',
    initialState: {
        users: [],
        countPage: 10,
        totalCount: 0,
        PageNumber: 1,
        SearchText: '',
        isLoadesUsers: false,
        isFollowing: [],
    },
    reducers: {
        setFollower(state, action) {
            const config = {
                array: state.users,
                nameIndexObject: 'id',
                typeModify: 'followed',
                toModify: true,
                toCompare: action.payload.id
            }
            state.users = modifyArray(config)
        },
        deleteFollower(state, action) {
            const config = {
                array: state.users,
                nameIndexObject: 'id',
                typeModify: 'followed',
                toModify: false,
                toCompare: action.payload.id
            }
            state.users = modifyArray(config)
        },
        getData(state, action) {
            state.users = [...action.payload.data]
        },
        getTotalCount(state, action) {
            state.totalCount = action.payload.count
        },
        getPageNumber(state, action) {
            state.PageNumber = action.payload.number
        },
        getSearchText(state, action) {
            state.SearchText = action.payload.text
        },
        toLoades(state, action) {
            state.isLoadesUsers = action.payload.boolean
        },
        toFollowing(state, action) {
            if (action.payload.boolean) {
                state.isFollowing.push(action.payload.userID)
            } else {
                state.isFollowing = state.isFollowing.filter(id => id !== action.payload.userID)
            }
        }
    }
})

export const {
    setFollower,
    deleteFollower,
    getData,
    getTotalCount,
    getPageNumber,
    getSearchText,
    toLoades,
    toFollowing
} = UsersSlice.actions
export default UsersSlice.reducer
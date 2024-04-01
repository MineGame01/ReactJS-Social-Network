import {createSlice} from "@reduxjs/toolkit";
import {modifyArray} from "../../../Utils/modifyArray/modifyArray";

const ProfileSlice = createSlice({
    name: 'profilePage',
    initialState: {
        postData: [
            {id: 1, message: 'Hello its my first post', likeCount: 100, deslikeCount: 1},
            {id: 2, message: 'HELLOOOOOOOOO', likeCount: 101, deslikeCount: 2},
            {id: 3, message: 'name Klyuchka', likeCount: 1000, deslikeCount: 0},
            {id: 4, message: 'Good Like', likeCount: 32, deslikeCount: 2}
        ],
        isLoadesProfile: false,
        profileData: null,
        statusData: 'Нет статуса'
    },
    reducers: {
        addPostAction(state, action) {
            const NewPost = {
                id: 5,
                message: action.payload.newPost,
                likeCount: 0,
                deslikeCount: 0
            }
            state.postData.push(NewPost)
        },
        deletePostByID(state, action) {
            state.postData = state.postData.filter(el => el.id !== action.payload.id)
        },
        likeUp(state, action) {
            const config = {
                array: state.postData,
                nameIndexObject: 'id',
                typeModify: 'likeCount',
                toAddMore: true,
                toCompare: action.payload.id
            }
            state.postData = modifyArray(config)
        },
        deslikeUp(state, action) {
            const config = {
                array: state.postData,
                nameIndexObject: 'id',
                typeModify: 'deslikeCount',
                toAddMore: true,
                toCompare: action.payload.id
            }
            state.postData = modifyArray(config)
        },
        getProfileData(state, action) {
            state.profileData = action.payload.data
        },
        toLoadesProfile(state, action) {
            state.isLoadesProfile = action.payload.boolean
        },
        getStatusData(state, action) {
            state.statusData = action.payload.statusData
        }
    }
})

export const {
    addPostAction,
    likeUp,
    deslikeUp,
    getProfileData,
    toLoadesProfile,
    getStatusData,
    deletePostByID
} = ProfileSlice.actions
export default ProfileSlice.reducer
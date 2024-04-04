import {createSlice} from "@reduxjs/toolkit";
import {modifyArray} from "../../../Utils/modifyArray/modifyArray";

const ProfileSlice = createSlice({
    name: 'profilePage',
    initialState: {
        postData: [

        ],
        isLoadesProfile: false,
        profileData: null,
        statusData: 'No status!'
    },
    reducers: {
        addPostAction(state, action) {
            const NewPost = {
                id: 1,
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
                isAddMore: true,
                toCompare: action.payload.id
            }
            state.postData = modifyArray(config)
        },
        deslikeUp(state, action) {
            const config = {
                array: state.postData,
                nameIndexObject: 'id',
                typeModify: 'deslikeCount',
                isAddMore: true,
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
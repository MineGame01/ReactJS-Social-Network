import {createSlice} from "@reduxjs/toolkit";
import {modifyArray} from "../../../Utils/modifyArray/modifyArray";

const ProfileSlice = createSlice({
    name: 'profilePage',
    initialState: {
        //Post Storage
        postData: [],
        //Is profile page loading?
        isLoadesProfile: false,
        //Profile data
        profileData: null,
        //Status user
        statusData: 'No status!',
        //This is id authorized user? or id other user?
        urlIdOrUserId: null
    },
    reducers: {
        //Installs id authorized user or id other user
        setUrlIdOrUserId(state, action) {
            state.urlIdOrUserId = action.payload.id
        },
        //Adding new post to array
        addPostAction(state, action) {
            const NewPost = {
                id: 1,
                message: action.payload.newPost,
                likeCount: 0,
                deslikeCount: 0
            }
            state.postData.push(NewPost)
        },
        //Deleting post by id
        deletePostByID(state, action) {
            state.postData = state.postData.filter(el => el.id !== action.payload.id)
        },
        //Adding one like to the post by id
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
        //Decrease one like to the post by id
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
        //Getting profile data
        getProfileData(state, action) {
            state.profileData = action.payload.data
        },
        //Is profile page loading?
        toLoadesProfile(state, action) {
            state.isLoadesProfile = action.payload.boolean
        },
        //Getting user status data
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
    deletePostByID,
    setUrlIdOrUserId
} = ProfileSlice.actions
export default ProfileSlice.reducer
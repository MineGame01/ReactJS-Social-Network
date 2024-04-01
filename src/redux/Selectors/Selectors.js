export const getInitilizationState = state => {
    return state.app.initilization
}

//AuthSlice
export const getAuthDataState = state => {
    return state.AuthData.data
}

export const getIsAuthState = state => {
    return state.AuthData.isAuth
}

export const getUrlCaptchaState = state => {
    return state.AuthData.urlCaptcha
}

export const getIsLoadesAuthState = state => {
    return state.AuthData.isLoadesAuth
}

//MessagesSlice

//ProfileSlice
export const getPostDataState = state => {
    return state.profilePage.postData
}

export const getIsLoadesProfileState = state => {
    return state.profilePage.isLoadesProfile
}

export const getProfileDataState = state => {
    return state.profilePage.profileData
}

export const getStatusState = state => {
    return state.profilePage.statusData
}

//UrlSlice

//UsersSlice
export const getUsersState = state => {
    return state.UsersPage.users
}

export const getCountPageState = state => {
    return state.UsersPage.countPage
}

export const getTotalCountState = state => {
    return state.UsersPage.totalCount
}

export const getPageNumberState = state => {
    return state.UsersPage.PageNumber
}

export const getSearchTextState = state => {
    return state.UsersPage.SearchText
}

export const getIsLoadesUsersState = state => {
    return state.UsersPage.isLoadesUsers
}

export const getIsFollowingState = state => {
    return state.UsersPage.isFollowing
}
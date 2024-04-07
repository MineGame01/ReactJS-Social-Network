import UrlSlice from './Slices/UrlSlice/UrlSlice'
import ProfileSlice from './Slices/ProfileSlice/ProfileSlice'
import UsersSlice from './Slices/UsersSlice/UsersSlice'
import AuthSlice from "./Slices/AuthSlice/AuthSlice";
import { reducer as formReducer } from 'redux-form'
import {configureStore} from "@reduxjs/toolkit";
import AppSlice from "./Slices/AppSlice/AppSlice";
import {compose} from "redux";
import DialogsSlice from "./Slices/DialogsSlice/DialogsSlice";

let store = configureStore({
    reducer: {
        profilePage: ProfileSlice,
        DialogsPage: DialogsSlice,
        urlData: UrlSlice,
        UsersPage: UsersSlice,
        AuthData: AuthSlice,
        app: AppSlice,
        form: formReducer
    },
})
window.store = store;
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose()

export default store;
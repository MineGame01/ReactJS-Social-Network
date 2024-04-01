import profilePageReducer from "./Slices/ProfileSlice/ProfileSlice";
import messagesPageReducer from "./Slices/MessagesSlice/MessagesSlice";

let store = {
    _state: {
        urlData: {
            url: [
                {id: 1, url: 'Profile'},
                {id: 2, url: 'Messages'},
                {id: 3, url: 'News'},
                {id: 4, url: 'Music'},
                {id: 5, url: 'Settings'}
            ]
        },
        profilePage: {
            postData: [
                {id: 1, message: 'Hello its my first post', likeCount: 100, deslikeCount: 1},
                {id: 2, message: 'HELLOOOOOOOOO', likeCount: 101, deslikeCount: 2},
                {id: 3, message: 'name Klyuchka', likeCount: 1000, deslikeCount: 0},
                {id: 4, message: 'Good Like', likeCount: 32, deslikeCount: 2}
            ],
            timeTextArea: '',
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'User', my: false},
                {id: 2, message: 'Me', my: true},
                {id: 3, message: 'User', my: false},
                {id: 4, message: 'Me', my: true},
            ],
            dialogsData: [
                {id: 1, name: 'Misha'},
                {id: 2, name: 'Klyuchka'},
                {id: 3, name: 'Andrey'}
            ],
            timeTextArea: '',
        }
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        this._state.profilePage = profilePageReducer(this.getState().profilePage, action);
        this._state.messagesPage = messagesPageReducer(this.getState().messagesPage, action);
        this._renderPage(this.getState());
    },
    funcitonReloadIndex(functon) {
        this._renderPage = functon;
    },
    _renderPage() {

    }
}

export default store;
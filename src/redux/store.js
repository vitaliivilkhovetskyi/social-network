import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you. i`m', likesCount: 12},
                {id: 1, message: 'its my first post', likesCount: 11}
            ],
            newPostText: 'Vitalii-kamasunte'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vitalii'},
                {id: 1, name: 'Vitalii'},
                {id: 2, name: 'Andriy'},
                {id: 3, name: 'Vasya'},
                {id: 4, name: 'Valera'},
                {id: 5, name: 'Petya'},
                {id: 6, name: 'igor'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 1, message: 'Hello'},
                {id: 2, message: 'Hyper Link'},
                {id: 3, message: 'Hyper Link'},
                {id: 4, message: 'Hyper Link'},
                {id: 5, message: 'Hyper Link'},
            ],
            newMessageBody: ""
        },
        sitebar: {
            postsSiteBar: [
                {id: 1, message: 'What are you doing', likesCount: 12},
                {id: 1, message: 'I will try to help you', likesCount: 11}
            ]
        }
    },
    _callSubscriber() {
        console.log('change');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sitebarReducer(this._state.sitebar, action);

        this._callSubscriber(this._state);

    },
}


export default store;
window.store = store;
let UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
let SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [ ...state.messages, {id: 6, message: body} ]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;
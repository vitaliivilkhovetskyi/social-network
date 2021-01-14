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
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type){
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [ ...state.messages, {id: 6, message: body} ]
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;
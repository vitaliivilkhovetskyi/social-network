let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi, how are you. i`m', likesCount: 12},
            {id: 1, message: 'its my first post', likesCount: 11}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id:1, name: 'Vitalii'},
            {id:1, name: 'Vitalii'},
            {id:2, name: 'Andriy'},
            {id:3, name: 'Vasya'},
            {id:4, name: 'Valera'},
            {id:5, name: 'Petya'},
            {id:6, name: 'igor'}
        ],
        messages: [
            {id:1, message: 'Hi'},
            {id:1, message: 'Hello'},
            {id:2, message: 'Hyper Link'},
            {id:3, message: 'Hyper Link'},
            {id:4, message: 'Hyper Link'},
            {id:5, message: 'Hyper Link'},
        ]
    },
    sitebar: {
        postsSiteBar: [
            {id: 1, message: 'What are you doing', likesCount: 12},
            {id: 1, message: 'I will try to help you' , likesCount: 11}
        ]
    }
}

export default state;
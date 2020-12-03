let initialState = {
    postsSiteBar: [
        {id: 1, message: 'What are you doing', likesCount: 12},
        {id: 1, message: 'I will try to help you', likesCount: 11}
    ]
};

const sitebarReducer = (state = initialState, action) => {
    return state;
}

export default sitebarReducer;
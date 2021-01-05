import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'hi, how are you. i`m', likesCount: 12},
        {id: 1, message: 'its my first post', likesCount: 11}
    ]
};

test('length of posts should be incremental', () => {
    //1. test data

    let action = addPostActionCreator("hello vasya");

    //2.Action
    let newState = profileReducer(state,action);

    //3. expectation
    expect(newState.posts.length).toBe(3);
});

test('message of new posts should be correct', () => {
    //1. test data

    let action = addPostActionCreator("hello vasya");

    //2.Action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[2].message).toBe("Vitali");
});

test('after deleting length of messages should be decrement', () => {
    //1. test data

    let action = deletePost(1);

    //2.Action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

test('after deleting length of messages should  not be decrement if id is incorrect', () => {
    //1. test data

    let action = deletePost(1000);

    //2.Action
    let newState = profileReducer(state, action);

    //3. expectation
    expect(newState.posts.length).toBe(2);
});

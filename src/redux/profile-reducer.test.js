import React from 'react';
import profileReducer, {addPostActionCreator} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: 'Hi my name is sasha', likesCount: '2000'},
        {id: 2, message: 'I learn react', likesCount: '3000'},
    ]
};

it('new post should be added', () => {
    // 1. test data
    let action = addPostActionCreator('new post');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

it('message should be corrected', () => {
    let action = addPostActionCreator('new post');
    let newState = profileReducer(state, action);
    expect(newState.posts[2].message).toBe('new post');
});
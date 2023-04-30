import {profileAPI} from "../api/api";

const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const SAVE_PHOTO = 'profile/SAVE-PHOTO'

let initialState = {
    posts: [
        {id: 1, message: 'Hi my name is sasha', likesCount: '2000'},
        {id: 2, message: 'I learn react', likesCount: '3000'},
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: state.posts.length + 1,
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post],
            };
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data));

    }
}
export const getUserStatus = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data));
    }
}
export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (photos) => async (dispatch) => {
    const data = await profileAPI.savePhoto(photos);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

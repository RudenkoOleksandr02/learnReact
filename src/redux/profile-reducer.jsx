import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = "profile/ADD-POST";
const UPDATE_NEW_POST_TEXT = "profile/UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'profile/SET-USER-PROFILE';
const SET_STATUS = 'profile/SET-STATUS';
const SAVE_PHOTO = 'profile/SAVE-PHOTO';
const CHANGE_PROFILE_SUCCESS_SAVED = 'profile/CHANGE-PROFILE-SUCCESS-SAVED';

let initialState = {
    posts: [
        {id: 1, message: 'Hi my name is sasha', likesCount: '2000'},
        {id: 2, message: 'I learn react', likesCount: '3000'},
    ],
    profile: null,
    status: '',
    isProfileSuccessSaved: false
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
        case CHANGE_PROFILE_SUCCESS_SAVED:
            return {...state, isProfileSuccessSaved: action.flag}
        default:
            return state;
    }
}

export default profileReducer;

export const addPostActionCreator = (newPost) => ({type: ADD_POST, newPost});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})
const changeProfileSaved = (flag) => ({type: CHANGE_PROFILE_SUCCESS_SAVED, flag})

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

const getObjectErrors = (profile, messages, insideObj) => {
    let obj = {}
    messages.forEach(m => {
        const reg = m.match(/\(([^)]+)\)/g)[0].replace(/[()]/g, "");
        let key = reg[0].toLowerCase() + reg.slice(1);
        let nextKey;

        if (key.includes(insideObj)) {
            nextKey = key.split('->')[1].toLowerCase();
            key = insideObj;
        }
        if (profile[key] !== null && typeof profile[key] === "object") {
            if (!obj[key]) {
                obj[key] = {};
            }
            obj[key][nextKey] = m;
        } else {
            obj[key] = m;
        }
    })
    return obj;
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const profileData = getState().profilePage.profile;
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
        dispatch(getUserProfile(userId));
        dispatch(changeProfileSaved(true));
    } else {
        dispatch(stopSubmit('profile-data', getObjectErrors(profileData, data.messages, 'contacts')));
        dispatch(changeProfileSaved(false));
    }
}

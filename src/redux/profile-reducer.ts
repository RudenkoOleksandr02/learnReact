import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {photosType, postsType, profileType} from "../types/types";


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
    ] as Array<postsType>,
    profile: null as profileType | null,
    status: '',
    isProfileSuccessSaved: false
};
export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let post = {
                id: state.posts.length + 1,
                message: action.newPost,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, post]
            };
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case SAVE_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos} as profileType}
        case CHANGE_PROFILE_SUCCESS_SAVED:
            return {...state, isProfileSuccessSaved: action.flag}
        default:
            return state;
    }
}

export default profileReducer;

type addPostActionType = {
    type: typeof ADD_POST
    newPost: string
}
export const addPostActionCreator = (newPost: string): addPostActionType => ({type: ADD_POST, newPost});
type setUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: profileType
}
export const setUserProfile = (profile: profileType): setUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type setUserStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setUserStatus = (status: string): setUserStatusActionType => ({type: SET_STATUS, status});
type savePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO
    photos: photosType
}
const savePhotoSuccess = (photos: photosType): savePhotoSuccessActionType => ({type: SAVE_PHOTO, photos})
type changeProfileSavedActionType = {
    type: typeof CHANGE_PROFILE_SUCCESS_SAVED
    flag: boolean
}
const changeProfileSaved = (flag: boolean): changeProfileSavedActionType => ({type: CHANGE_PROFILE_SUCCESS_SAVED, flag})

export const getUserProfile = (userId: number) => {
    return async (dispatch: any) => {
        let data = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(data));

    }
}
export const getUserStatus = (userId: number) => {
    return async (dispatch: any) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setUserStatus(data));
    }
}
export const updateUserStatus = (status: string) => async (dispatch: any) => {
    try {
        let data = await profileAPI.updateStatus(status)
        if (data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    } catch (error) {
        console.error(error);
    }

}

export const savePhoto = (photos: any) => async (dispatch: any) => {
    const data = await profileAPI.savePhoto(photos);

    if (data.resultCode === 0) {
        dispatch(savePhotoSuccess(data.data.photos));
    }
}

const getObjectErrors = (profile: profileType, messages: Array<string>, insideObj: string): any => {
    let obj: any = {};

    messages.forEach((m) => {
        const regMatch = m.match(/\(([^)]+)\)/g);
        if (regMatch) {
            const reg = regMatch[0].replace(/[()]/g, "");
            let key = reg[0].toLowerCase() + reg.slice(1);
            let nextKey: string | undefined;

            if (key.includes(insideObj)) {
                const splitKeys = key.split('->');
                if (splitKeys.length > 1) {
                    nextKey = splitKeys[1].toLowerCase();
                    key = insideObj;
                }
            }

            if (profile[key] !== null && typeof profile[key] === "object") {
                if (!obj[key]) {
                    obj[key] = {};
                }
                if (nextKey) {
                    obj[key][nextKey] = m;
                } else {
                    obj[key] = m;
                }
            } else {
                obj[key] = m;
            }
        }
    });

    return obj;
};


export const saveProfile = (profile: profileType) => async (dispatch: any, getState: any) => {
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

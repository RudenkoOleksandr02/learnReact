import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";
const SET_CAPTCHA_URL = "auth/CAPTCHA-URL"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    url: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
        {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
}

export default authReducer;

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});

export const getAuth = () => async (dispatch) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}
const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, payload: captchaUrl});

const getCaptchaUrl = () => async (dispatch) => {
    const data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(data))
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === 0) {
        dispatch(getAuth());
        dispatch(setCaptchaUrl({url: null}));
    } else {
        if (data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let errorMessage = data.messages[0].length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', {_error: errorMessage}))
    }
}
export const logout = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}
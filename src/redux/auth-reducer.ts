import {authAPI, securityAPI} from "../api/api"
import {stopSubmit} from "redux-form"

const SET_USER_DATA = "auth/SET-USER-DATA"
const SET_CAPTCHA_URL = "auth/CAPTCHA-URL"
let initialState = {
    userId: null as number | null,
    email:  null as string | null,
    login: null as string | null,
    isAuth: false,
    url: null as string | null
}
export type initialStateType = typeof initialState



const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default authReducer;

type setAuthUserDataPayloadActionType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean | null
}
type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataPayloadActionType
}
export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
});


export const getAuth = () => async (dispatch: any) => {
    let data = await authAPI.getAuth();
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthUserData(id, email, login, true));
    }
}

type setCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    payload: { url: string | null}
}
const setCaptchaUrl = (captchaUrl: { url: string | null}): setCaptchaUrlActionType => ({type: SET_CAPTCHA_URL, payload: captchaUrl});

const getCaptchaUrl = () => async (dispatch: any) => {
    const data = await securityAPI.getCaptchaUrl();
    dispatch(setCaptchaUrl(data))
}

export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null) => async (dispatch: any) => {
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
export const logout = () => async (dispatch: any) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}
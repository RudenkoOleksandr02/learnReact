import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "auth/SET-USER-DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
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

export const login = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuth());
    } else {
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
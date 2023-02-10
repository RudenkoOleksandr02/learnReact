import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuth} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
}

export default appReducer;

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(getAuth())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
}

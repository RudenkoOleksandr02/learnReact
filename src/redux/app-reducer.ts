import {getAuth} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS";

export type initialStateType = {
    initialized: boolean
}
let initialState: initialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
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

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}
export const initializedSuccess = (): initializedSuccessActionType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    const promise = dispatch(getAuth())
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccess());
    });
}

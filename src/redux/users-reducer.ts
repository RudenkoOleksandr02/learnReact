import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {photosType} from "../types/types";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'users/TOGGLE_IS_FOLLOWING_PROGRESS';


export type usersType = {
    id: number | string
    name: string
    status: string
    photos: photosType
    followed: boolean
}
type followingInProgressType = boolean | number
let initialState = {
    users: [] as Array<usersType>,
    pageSize: 10,
    totalCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

type initialStateType = typeof initialState;


const usersReducer = (state = initialState, action: any): initialStateType  => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
            ...state,
            users: updateObjectInArray(state.users, action.userId, 'id', {followed: false})
        }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

export default usersReducer;

type followSuccessActionType = {
    type: typeof FOLLOW;
    userId: number
}
export const followSuccess = (userId: number): followSuccessActionType  => ({type: FOLLOW, userId});

type unfollowSuccessActionType = {
    type: typeof UNFOLLOW;
    userId: number;
}
export const unfollowSuccess = (userId: number): unfollowSuccessActionType => ({type: UNFOLLOW, userId});

type setUsersActionType = {
    type: typeof SET_USERS;
    users: any
}
export const setUsers = (users: Array<usersType>): setUsersActionType => ({type: SET_USERS, users})

type setCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE;
    pageNumber: number
}
export const setCurrentPage = (pageNumber: number): setCurrentPageActionType => ({type: SET_CURRENT_PAGE, pageNumber});


type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT;
    totalCount: number
}
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalCount})

type toggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING;
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingActionType => ({type: TOGGLE_IS_FETCHING, isFetching})

type toggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS;
    isFetching: boolean;
    userId: number | string
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number | string): toggleFollowingProgressActionType => ({
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId

})

export const requestUsers = (currentPage: number, pageSize: number) => {
    return async (dispatch: any) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(currentPage));
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(toggleIsFetching(false));

    }
}
const followUnfollowFlow = async (dispatch: any, userId: number | string, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));

}
export const follow = (userId: number | string) => {
    return async (dispatch: any) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.follow, followSuccess);
    }
}

export const unfollow = (userId: number) => {
    return async (dispatch: any) => {
        await followUnfollowFlow(dispatch, userId, usersAPI.unfollow, unfollowSuccess);
    }
}

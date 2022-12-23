const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
       /* {id: 1, followed: true, fullName: 'Sasha', status: 'I am a boss', location: {country: 'Ukraine', city: 'Obukhov'}},
        {id: 2, followed: true, fullName: 'Nastya', status: 'I am a boss too', location: {country: 'Ukraine', city: 'Obukhov'}},
        {id: 3, followed: false, fullName: 'Timur', status: 'I am a boss too', location: {country: 'Ukraine', city: 'Obukhov'}},*/
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export default usersReducer;

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

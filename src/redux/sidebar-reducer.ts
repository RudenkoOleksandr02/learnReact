type friendsType = {
    id: number
    name: string
    avatar: string
}
type navLinksType = {
    id: number
    path: string
    title: string
}
let initialState = {
    friends: [
        {id: 1, name: 'Sasha', avatar: 'https://ireland.apollo.olxcdn.com/v1/files/nwcj26i52i981-UA/image;s=750x1000'},
        {id: 2, name: 'Andrey', avatar: 'https://ireland.apollo.olxcdn.com/v1/files/2knlvxbv7vyl2-UA/image;s=1000x700'},
        {id: 3, name: 'Misha', avatar: 'https://ireland.apollo.olxcdn.com/v1/files/w3vgq7dl40g53-UA/image;s=1000x700'},
    ] as Array<friendsType>,
    navLinks: [
        {id: 1, path: '/profile', title: 'Profile'},
        {id: 2, path: '/dialogs', title: 'Messages'},
        {id: 3, path: '/users', title: 'Users'},
        {id: 4, path: '/news', title: 'News'},
        {id: 5, path: '/music', title: 'Music'},
        {id: 6, path: '/settings', title: 'Settings'},
    ] as Array<navLinksType>
};

type initialStateType = typeof initialState;

const sidebarReducer = (state = initialState, action: any): initialStateType => {
    return state;
}

export default sidebarReducer;
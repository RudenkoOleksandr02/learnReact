import {usersType} from "../redux/users-reducer";
type newObjProps = {
    followed: boolean
}
export const updateObjectInArray = (items: Array<usersType>, itemId: number, objPropName: keyof usersType, newObjProps: newObjProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u;
    })
}
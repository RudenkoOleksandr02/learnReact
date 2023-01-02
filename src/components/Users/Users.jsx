import React from "react";
import User from "./User/User";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        });
    }
    const users =
        props.users.map(u => <User follow={props.follow}
                                   unfollow={props.unfollow}
                                   key={u.id}
                                   followed={u.followed}
                                   name={u.name}
                                   status={u.status}
                                   location={'u.location'}
                                   id={u.id}
                                   photos={u.photos.small != null ? u.photos.small : userPhoto}/>);

    return <div>{users}</div>
}

export default Users;
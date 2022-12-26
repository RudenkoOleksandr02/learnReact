import React from "react";
import User from "./User/User";

const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{id: 1, imgURL: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', followed: true, fullName: 'Sasha', status: 'I am a boss', location: {country: 'Ukraine', city: 'Obukhov'}},
            {id: 2, imgURL: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', followed: true, fullName: 'Nastya', status: 'I am a boss too', location: {country: 'Ukraine', city: 'Obukhov'}},
            {id: 3, imgURL: 'https://i.pinimg.com/originals/86/95/54/8695540db1e9224367ed9d1a4884ccfc.jpg', followed: false, fullName: 'Timur', status: 'I am a boss too', location: {country: 'Ukraine', city: 'Obukhov'}}])
    }

    const users =
        props.users.map(u => <User follow={props.follow}
                                   unfollow={props.unfollow}
                                   key={u.id}
                                   followed={u.followed}
                                   fullName={u.fullName}
                                   status={u.status}
                                   location={u.location}
                                   id={u.id}
                                   imgURL={u.imgURL}/>);

    return <div>{users}</div>
}

export default Users;
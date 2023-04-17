import React from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const User = ({id, photos, followed, followingInProgress, unfollow, follow, name, status, location}) => {
    return <section>
        <div>
            <NavLink to={'/profile/' + id}>
                <img className={s.image} src={photos}/>
            </NavLink>
            {followed
                ? <button disabled={followingInProgress.some(id => id === id)}
                          onClick={() => { unfollow(id) }}>unfollow</button>
                : <button disabled={followingInProgress.some(id => id === id)}
                          onClick={() => { follow(id) }}>follow</button>}
        </div>
        <div>
            <h3>{name}</h3>
            <p>{status}</p>
            <div>
                <span>{location}</span>
                <span>{location}</span>
            </div>
        </div>
    </section>
}

export default User;
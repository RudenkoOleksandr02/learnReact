import React from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../api/api";

const User = (props) => {
    return <section>
        <div>
            <NavLink to={'/profile/' + props.id}>
                <img className={s.image} src={props.photos}/>
            </NavLink>
            {props.followed
                ? <button disabled={props.followingInProgress.some(id => id === props.id)}
                          onClick={() => { props.unfollow(props.id) }}>unfollow</button>
                : <button disabled={props.followingInProgress.some(id => id === props.id)}
                          onClick={() => { props.follow(props.id) }}>follow</button>}
        </div>
        <div>
            <h3>{props.name}</h3>
            <p>{props.status}</p>
            <div>
                <span>{props.location}</span>
                <span>{props.location}</span>
            </div>
        </div>
    </section>
}

export default User;
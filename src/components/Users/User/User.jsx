import React from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";

const User = (props) => {
    return <section>
        <div>
            <NavLink to={'/profile/' + props.id}>
                <img className={s.image} src={props. photos}/>
            </NavLink>
            {props.followed ? <button onClick={() => props.unfollow(props.id)}>unfollow</button>
                            : <button onClick={() => props.follow(props.id)}>follow</button>}
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
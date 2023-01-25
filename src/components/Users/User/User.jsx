import React from "react";
import s from './User.module.css'
import {NavLink} from "react-router-dom";
import axios from "axios";

const User = (props) => {
    return <section>
        <div>
            <NavLink to={'/profile/' + props.id}>
                <img className={s.image} src={props.photos}/>
            </NavLink>
            {props.followed
                ? <button onClick={() =>
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'd1d08d2b-19c6-436a-abe9-59b5357407f1'
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.unfollow(props.id)
                        }
                    })}>unfollow</button>
                : <button onClick={() =>
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`, {}, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': 'd1d08d2b-19c6-436a-abe9-59b5357407f1'
                        }
                    }).then(response => {
                        if (response.data.resultCode === 0) {
                            props.follow(props.id)
                        }
                    })}>follow</button>}
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
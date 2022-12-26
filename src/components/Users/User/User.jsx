import React from "react";
import s from './User.module.css'

const User = (props) => {
    return <section>
        <div>
            <img className={s.image} src={props.imgURL}/>
            {props.followed ? <button onClick={() => props.unfollow(props.id)}>unfollow</button>
                            : <button onClick={() => props.follow(props.id)}>follow</button>}
        </div>
        <div>
            <h3>{props.fullName}</h3>
            <p>{props.status}</p>
            <div>
                <span>{props.location.country}</span>
                <span>{props.location.city}</span>
            </div>
        </div>
    </section>
}

export default User;
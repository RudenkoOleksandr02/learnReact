import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Friend.module.css';

const Friend = (props) => {
    let path = '/dialogs/' + props.id;

    return <div className={'friend'}>
        <NavLink to={path}>
            <div>
                <img src={props.avatar} className={s.avatar}/>
            </div>
            <div>{props.name}</div>
        </NavLink>
    </div>
}

export default Friend;
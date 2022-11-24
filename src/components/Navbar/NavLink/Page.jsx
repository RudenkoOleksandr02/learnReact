import React from 'react';
import s from "./Page.module.css";
import {NavLink} from "react-router-dom";

const Page = (props) => {
    return <div className={s.navLink}>
        <NavLink to={props.path} className={event => event.isActive ? s.active : s.item}>{props.title}</NavLink>
    </div>
}

export default Page;
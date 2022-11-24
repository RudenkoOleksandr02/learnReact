import React from 'react';
import s from './Navbar.module.css';
import Friend from "./Friend/Friend";
import Page from "./NavLink/Page";

const Navbar = (props) => {
    return <nav className={s.nav}>
        <div className={s.navLinks}>
            {props.state.navLinks.map(data => <Page path={data.path} title={data.title} key={data.id} />)}
        </div>
        <div className={s.friends}>
            {props.state.friends.map(dialog => <Friend name={dialog.name} id={dialog.id} avatar={dialog.avatar} key={dialog.id}/>)}
        </div>
    </nav>
}

export default Navbar;
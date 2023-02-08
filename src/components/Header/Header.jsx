import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
	return <header className={s.header}>
		<img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />

		{props.isAuth
			? <div>{props.login } <button onClick={props.logout}>Logout</button></div>
			: <NavLink to={'login/'}>login</NavLink>
		}
	</header>
}

export default Header;
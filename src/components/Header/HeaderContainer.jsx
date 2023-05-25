import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout, setAuthUserData} from "../../redux/auth-reducer.ts";

class HeaderContainer extends React.Component {


	render() {
		return <Header {...this.props} />
	}
}

const mapDispatchToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect(mapDispatchToProps, {setAuthUserData, logout})(HeaderContainer);

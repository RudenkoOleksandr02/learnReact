import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setAuthUserData} from "../../redux/auth-reducer";
import {headerAPI} from "../../api/api";

class HeaderContainer extends React.Component {
	componentDidMount() {
		headerAPI.setAuth().then(data => {
				if (data.resultCode === 0) {
					let {id, login, email} = data.data
					this.props.setAuthUserData(id, email, login);
				}
		});
	}

	render() {
		return <Header {...this.props} />
	}
}

const mapDispatchToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect(mapDispatchToProps, {setAuthUserData})(HeaderContainer);
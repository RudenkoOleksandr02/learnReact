import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validate";
import {FormControl} from "../common/FormControls/FormControl";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from 'react-router-dom';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field tag="input" component={FormControl} name={"email"} placeholder={"email"} validate={[required]}/>
            </div>
            <div>
                <Field tag="input" component={FormControl} name={"password"} placeholder={"password"} validate={[required]}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> remember me
            </div>
            <div >
                {props.error}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    let onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {login})(Login);
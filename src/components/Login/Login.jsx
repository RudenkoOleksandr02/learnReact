import React from 'react';
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validate";
import {FormControl} from "../common/FormControls/FormControls";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field tag="input" component={FormControl} name={"login"} placeholder={"login"} validate={[required]}/>
            </div>
            <div>
                <Field tag="input" component={FormControl} name={"password"} placeholder={"password"} validate={[required]}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/> remember me
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
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;
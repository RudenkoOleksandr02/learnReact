import React from 'react';
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props} />
    }

    return connect(mapStateToProps)(RedirectComponent);
};

export default withAuthRedirect;
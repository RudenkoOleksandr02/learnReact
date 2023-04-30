import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, setUserProfile, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "../common/withRouter/withRouter";
import { Navigate } from 'react-router-dom'
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login'); // redirect
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
        if (!this.props.isAuth) return <Navigate to={'/login'}/>
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Profile {...this.props} isOwner={!this.props.match.params.userId}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId
});

export default compose(
    connect(mapStateToProps, {setUserProfile, getUserProfile, getUserStatus, updateUserStatus, savePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
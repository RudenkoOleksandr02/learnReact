import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo isProfileSuccessSaved={props.isProfileSuccessSaved} profile={props.profile} saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostsContainer />
    </div>
}

export default Profile;
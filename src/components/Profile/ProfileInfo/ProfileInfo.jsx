import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.png'

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return <>
        <div>
            <img src={props.profile.photos.large || userPhoto}/>
            {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    </>
}

export default ProfileInfo;
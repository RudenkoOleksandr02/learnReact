import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.png'
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import profile from "../Profile";

const ProfileInfo = (props) => {
    const [editMode, setEditMode] = useState(false);

    const changeEditMode = () => {
        if (props.isProfileSuccessSaved) {
            setEditMode(false);
        }
    }

    useEffect(() => {
        changeEditMode();
    }, [props.isProfileSuccessSaved])

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData);
    }

    return <>
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type='file' onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatusWithHooks status={props.status} updateUserStatus={props.updateUserStatus}/>
            {editMode ? <ProfileDataForm isOwner={props.isOwner} onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
                : <ProfileData profile={props.profile} goToEditMode={setEditMode} isOwner={props.isOwner}/>
            }
        </div>
    </>
}

export default ProfileInfo;
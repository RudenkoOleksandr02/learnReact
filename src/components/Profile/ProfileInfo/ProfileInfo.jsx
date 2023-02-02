import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return <>
        <div>
            {/*<img
                src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>*/}
        </div>
        <div>
            <img src={props.profile.photos.large}/>
            <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        </div>
    </>
}

export default ProfileInfo;
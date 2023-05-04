import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileData = ({profile: {fullName, aboutMe, lookingForAJob, lookingForAJobDescription, contacts}, goToEditMode}) => {
    return <div>
        <button onClick={() => goToEditMode(true)}>Edit</button>
        <div>
            <b>FullName:</b> {fullName}
        </div>
        <div>
            <b>About Me:</b> {aboutMe}
        </div>
        <div>
            <b>Looking for a job:</b> {lookingForAJob ? 'yes' : 'no'}
        </div>
        {lookingForAJob &&
            <div>
                <b>Looking for a job description:</b> {lookingForAJobDescription}
            </div>
        }
        <b>Contacts</b>: {Object.keys(contacts).map(key => {
            return <Contacts key={key} title={key} value={contacts[key]}/>
        })}
    </div>
}

const Contacts = ({title, value}) => {
    return <div className={s.contact}>
        <b>{title}:</b> {value}
    </div>
}

export default ProfileData;
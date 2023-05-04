import React from 'react';
import {createField} from "../../common/FormControls/FormControl";
import {reduxForm} from "redux-form";

const ProfileDataForm = ({profile, handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        {error && <div>
            {error}
        </div>}
        <button>Save</button>
        <div>
            <b>FullName:</b>
            {createField('input',
                'fullName',
                'fullName')
            }
        </div>
        <div>
            <b>About Me:</b>
            {createField('input',
                'aboutMe',
                'aboutMe')
            }
        </div>
        <div>
            <b>Looking for a job:</b>
            {createField('input',
                'lookingForAJob',
                '',
                {type: 'checkbox'})
            }
        </div>
        <div>
            <b>Looking for a job description:</b>
            {createField('textarea',
                'lookingForAJobDescription',
                'lookingForAJobDescription')
            }
        </div>
        <div>
            <b>Contacts: </b>
            {Object.keys(profile.contacts).map(key => {
                return <ContactsForm key={key} title={key}/>
            })}
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm({form: 'profile-data'})(ProfileDataForm);

const ContactsForm = ({title}) => {
    return <div>
        {createField('input', `contacts.${title}`, `${title}`)}
    </div>
}

export default ProfileDataReduxForm;
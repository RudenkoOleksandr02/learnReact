import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activeEditMode = () => {
        setEditMode(true);
    }

    const deactiveEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const changeStatus = (e) => {
        setStatus(e.currentTarget.value);
    }

    /*componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }*/
    return <div>
        {editMode &&
            <div>
                <b>Status</b>: <input onBlur={deactiveEditMode}
                                      autoFocus={true}
                                      value={status}
                                      onChange={e => changeStatus(e)}
                                />
            </div>
        }
        {!editMode &&
            <div>
                <b>Status</b>: <span onDoubleClick={activeEditMode}>{props.status || "-------"}</span>
            </div>
        }
    </div>
}


export default ProfileStatusWithHooks;
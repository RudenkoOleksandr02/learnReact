import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    activeEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactiveEditMode() {
        this.setState({
            editMode: false
        })
        this.props.updateUserStatus(this.state.status)
    }

    changeStatus = (e) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div>
            {this.state.editMode &&
                <div>
                    <input onBlur={this.deactiveEditMode.bind(this)}
                           autoFocus={true}
                           value={this.state.status}
                           onChange={e => this.changeStatus(e)}
                    />
                </div>
            }
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status || "-------"}</span>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;
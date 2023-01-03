import React from "react";
import User from "./User/User";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {this.props.users.map(u => <User follow={this.props.follow}
                                             unfollow={this.props.unfollow}
                                             key={u.id}
                                             followed={u.followed}
                                             name={u.name}
                                             status={u.status}
                                             location={'u.location'}
                                             id={u.id}
                                             photos={u.photos.small != null ? u.photos.small : userPhoto}/>)}
        </div>
    }
}

export default Users;
import React from "react";
import User from "./User/User";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import s from './Users.module.css';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={`${s.link} ${this.props.currentPage === p && s.isActive}`}
                                 onClick={() => this.onPageChange(p)}>{p}</span>
                })}
            </div>
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
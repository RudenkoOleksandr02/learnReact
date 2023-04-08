import React from "react";
import User from "./User/User";
import userPhoto from '../../assets/images/user.jpg'
import s from './Users.module.css';

const Users = (props) =>  {
        let pagesCount = Math.ceil(props.totalCount / props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
            <div>
                {pages.map((p, index) => {
                    return <span key={index} className={`${s.link} ${props.currentPage === p && s.isActive}`}
                                 onClick={() => props.onPageChange(p)}>{p}</span>
                })}
            </div>
            {props.users.map(u => <User follow={props.follow}
                                             unfollow={props.unfollow}
                                             key={u.id}
                                             followed={u.followed}
                                             name={u.name}
                                             status={u.status}
                                             location={'u.location'}
                                             id={u.id}
                                             photos={u.photos.small != null ? u.photos.small : userPhoto}
                                            toggleFollowingProgress={props.toggleFollowingProgress}
                                            followingInProgress={props.followingInProgress}/>)}
        </div>
}

export default Users;
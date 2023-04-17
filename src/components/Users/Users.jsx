import React from "react";
import User from "./User/User";
import userPhoto from '../../assets/images/user.jpg'
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";

const Users = ({currentPage, pageSize, onPageChange, totalCount, users, ...props}) =>  {
        return <div>
           <Paginator currentPage={currentPage}
                      pageSize={pageSize}
                      onPageChange={onPageChange}
                      totalCount={totalCount}/>
            {users.map(u => <User follow={props.follow}
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
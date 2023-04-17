import React from "react";
import s from './Paginator.module.css';

const Users = ({totalCount, pageSize, currentPage, onPageChange}) =>  {
        let pagesCount = Math.ceil(totalCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>
                {pages.map((p, index) => {
                    return <span key={index} className={`${s.link} ${currentPage === p && s.isActive}`}
                                 onClick={() => onPageChange(p)}>{p}</span>
                })}
            </div>
}

export default Users;
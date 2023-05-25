import React, {useState} from "react";
import s from './Paginator.module.css';
import cn from "classnames";

const Paginator = ({totalCount, onPageChange, pageSize = 5, currentPage = 1, paginationSize = 10}) =>  {
        let pagesCount = Math.ceil(totalCount / pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let [currentPosition, setCurrentPosition] = useState(0);
        let firstNum = paginationSize * currentPosition + 1;
        let lastNum = paginationSize * currentPosition + paginationSize;

        return <div>
            {currentPosition !== 0 &&
                <button onClick={() => setCurrentPosition(--currentPosition)}>prev</button>
            }
            {pages.filter(p => p >= firstNum && p <= lastNum).map((p, index) => {
                    return <span key={index} className={cn({[s.isActive]: currentPage === p}, s.link)}
                                 onClick={() => onPageChange(p)}>{p}</span>
            })}
            {pages.length > lastNum &&
                <button onClick={() => setCurrentPosition(++currentPosition)}>next</button>
            }
            </div>
}

export default Paginator;
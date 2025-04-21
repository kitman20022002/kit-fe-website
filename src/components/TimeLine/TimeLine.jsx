import React from 'react';
import style from './TimeLine.module.css';

const TimeLine = (props) => {
    return (
        <div className={style.timeline}>
            {props.children}
        </div>
    )
};

export default TimeLine;

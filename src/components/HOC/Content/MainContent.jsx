import React from 'react';
import global from '../../Global/global.module.css';

const MainContent = (props) => {
    return (
        <div className={global.dec}>
            <div className={global['main-content__container']}>
                {props.children}
            </div>
        </div>
    )
};


export default MainContent;

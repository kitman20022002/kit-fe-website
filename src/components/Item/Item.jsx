import React from 'react';
import style from './Item.module.css';
import global from "../Global/global.module.css";
import {IconContext} from "react-icons";
import {icons} from '../../../data/aboutMe';

const Item = (props) => {
    return (
        <div className={style.card}>
            <IconContext.Provider value={{className: style.card__icon}}>
                {icons[props.icon]}
            </IconContext.Provider>
            <h3 className={global.h3}>{props.title}</h3>
            <p className={global.p}>{props.content}</p>
        </div>
    )
};

export default Item;

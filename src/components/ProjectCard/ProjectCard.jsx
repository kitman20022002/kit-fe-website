import React from 'react';
import style from './ProjectCard.module.css';
const ProjectCard = (props) => {
    return (
        <div className={style.card}>
            <img src="http://www.kitmanyiu.com/img/projects/Capture4.png"/>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    )
};

export default ProjectCard;

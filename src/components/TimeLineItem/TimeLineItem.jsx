import React from "react";
import style from "./TimeLineItem.module.css";

const TimeLineItem = (props) => {
  return (
    <div className={style["timeline-item"]}>
      <h4 className="item-title">{props.title}</h4>
      <span className={style["item-period"]}>{props.period}</span>
      <a
        href={props.url ?? "#"}
        target={"_blank"}
        className={style["item-small"]}
      >
        {props.company}
      </a>
      <p className={style["item-description"]}>{props.desc}</p>
    </div>
  );
};

export default TimeLineItem;

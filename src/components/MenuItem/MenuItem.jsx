import React from "react";
import style from "./MenuItem.module.css";
import Link from "../../../node_modules/next/link";
import { useRouter } from "../../../node_modules/next/router";

const MenuItem = (props) => {
  const router = useRouter();
  return (
    <li
      className={
        props.url === router.pathname
          ? [
              style.active,
              style.li,
              !props.hasAnimation ? style.animation : "",
            ].join(" ")
          : [style.li, !props.hasAnimation ? style.animation : ""].join(" ")
      }
    >
      <Link
        href={props.url}
        className={style.menu__link__parent}
        onClick={window.innerWidth <= 812 ? props.click : ""}
      >
        <button className={style.menu__link}>{props.text}</button>
      </Link>
    </li>
  );
};

export default MenuItem;

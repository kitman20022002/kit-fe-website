import React, { useEffect } from "react";
import Link from "next/link";
import Header from "../src/components/Header/Header";
import style from "./index.module.css";
import global from "../src/components/Global/global.module.css";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../public/img/kitman.png";
import shape from "../public/img/shape.png";
import { getServerUp, getSkillsServerUp } from "../api/admin";
//https://codepen.io/kjbrum/pen/wBBLXx
//https://codepen.io/designcouch/pen/obvKxm
const Home = () => {
  useEffect(() => {
    getServerUp();
    getSkillsServerUp();
  }, []);

  return (
    <>
      <Header />
      <div className={style.home}>
        <div className={style.text__container}>
          <p>Hi there I am</p>
          <h1>KiTMAN YiU</h1>
          <h2>
            Full stack Developer <b>[React/JAVA/AWS]</b>
          </h2>
          <div className={global.btn__container}>
            <Link href={"/about-me"}>
              <div className={style.effect1}>
                {/* vcard style */}
                <button className={global["button--lg"]}>Visit</button>
              </div>
            </Link>
          </div>
        </div>
        <div className={style.img__container}>
          <Image
            className={style.shape__img}
            src={shape}
            height={256}
            alt="Background"
            priority
            placeholder="blur"
          />
          <Image
            className={style.me__img}
            src={profilePic}
            alt="Kitman Yiu"
            priority
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import style from "./DeatilsInfo.module.css";
import global from "../Global/global.module.css";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { CgSoftwareDownload } from "react-icons/cg";
import Image from "next/image";
import me from "../../../public/img/1069018263-Mayiu-AH-119.jpg";
const DetailsInfo = (props) => {
  const { introData } = props;

  return (
    <section className={style["details-info"]}>
      <div className={""}>
        <h1 className={style.h1}>Kitman Yiu</h1>
      </div>
      <div className={style.profile__container}>
        <Image
          className={style.profile__img}
          src={me}
          alt="Kitman Yiu"
          placeholder="blur"
        />
        <div className={style["social-media"]}>
          <a
            href={introData.twitter}
            className={style["social-media__link"]}
            target="_blank"
          >
            <IconContext.Provider
              value={{
                className: [
                  global["react-icon"],
                  global["react-icon--white"],
                ].join(" "),
              }}
            >
              <FaTwitterSquare />
            </IconContext.Provider>
          </a>
          <a
            href={introData.linkedIn}
            className={style["social-media__link"]}
            target="_blank"
          >
            <IconContext.Provider
              value={{
                className: [
                  global["react-icon"],
                  global["react-icon--white"],
                ].join(" "),
              }}
            >
              <FaLinkedin />
            </IconContext.Provider>
          </a>
          <a
            href={introData.facebook}
            className={style["social-media__link"]}
            target="_blank"
          >
            <IconContext.Provider
              value={{
                className: [
                  global["react-icon"],
                  global["react-icon--white"],
                ].join(" "),
              }}
            >
              <FaFacebookSquare />
            </IconContext.Provider>
          </a>
          <a
            href={introData.github}
            className={style["social-media__link"]}
            target="_blank"
          >
            <IconContext.Provider
              value={{
                className: [
                  global["react-icon"],
                  global["react-icon--white"],
                ].join(" "),
              }}
            >
              <FaGithubSquare />
            </IconContext.Provider>
          </a>
        </div>
      </div>
      <div>
        <div className={style.details__container}>
          {/*<div>*/}
          {/*    <p className={style.p}>Full-stack Developer</p>*/}
          {/*</div>*/}
          <div className={style.detail__container}>
            <h3 className={style.h3}>Title</h3>
            <p className={style.p}>{introData.title}</p>
          </div>
          <div className={style.detail__container}>
            <h3 className={style.h3}>Status</h3>
            <p
              className={[
                style.p,
                introData.status.toUpperCase() === "UNAVAILABLE"
                  ? style.unavailable
                  : style.available,
              ].join(" ")}
            >
              {introData.status}
            </p>
          </div>
          <div className={style.detail__container}>
            <h3 className={style.h3}>Location</h3>
            <p className={style.p}>{introData.location}</p>
          </div>
          <div className={style.detail__container}>
            <h3 className={style.h3}>Email</h3>
            <p className={style.p}>{introData.email}</p>
          </div>
          <div className={style.detail__container}>
            <h3 className={style.h3}>Skills</h3>
            <a href={introData.skills} target="_blank">
              {introData.skills}
            </a>
          </div>
        </div>
        <div className={style.attachment__container}>
          <h2 className={style.h2}>ATTACHMENTS</h2>
          <a href={introData.cv_pdf} className={style.attachment__link}>
            <IconContext.Provider value={{ className: style.pdf__icon }}>
              <CgSoftwareDownload />
            </IconContext.Provider>
            Kitman-Yiu.pdf
          </a>
          <a href={introData.cv_docs} className={style.attachment__link}>
            <IconContext.Provider value={{ className: style.word__icon }}>
              <CgSoftwareDownload />
            </IconContext.Provider>
            Kitman-Yiu.docx
          </a>
        </div>
      </div>
    </section>
  );
};

export default DetailsInfo;

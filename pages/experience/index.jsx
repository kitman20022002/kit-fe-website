import React from "react";
import Header from "../../src/components/Header/Header";
import global from "../../src/components/Global/global.module.css";
import style from "./index.module.css";
import DeatilsInfo from "../../src/components/DeatilsInfo/DeatilsInfo";
import Head from "../../node_modules/next/head";
import Footer from "../../src/components/Footer/Footer";
import TimeLineItem from "../../src/components/TimeLineItem/TimeLineItem";
import TimeLine from "../../src/components/TimeLine/TimeLine";
import Canvas from "../../src/components/Canvas/Canvas";
import MainContent from "../../src/components/HOC/Content/MainContent";
import { introData } from "../../data/aboutMe";
import { educationD } from "../../data/education";
import { getExperience } from "../../api/admin";
const data = [
  {
    title: "Full Stack Developer",
    period: "2023",
    company: "Compass Education",
    desc: "A next-generation timetable system for the teachers and schools by automatic most of the process.",
    url: "n/a",
  },
  {
    title: "Full Stack Developer",
    period: "2021 - 2022",
    company: "Connective",
    desc: "Australia leading aggregator that create an open, transparent relationships CRM systems for brokers and lenders.",
    url: "https://www.connective.com.au/",
  },
  {
    title: "Tutor (Casual)",
    period: "2019-Current",
    company: "JR Academy",
    desc: "Assist students to understand Js,Node,Git, Clean and scalable code  concepts...etc",
    url: "https://jracademy.com.au/",
  },
];

export async function getServerSideProps() {
  try {
    const res = await getExperience();
    return {
      props: {
        experienceData: res,
      },
    };
  } catch (e) {
    return {
      props: {
        experienceData: data,
      },
    };
  }
}

const Experience = (props) => {
  const { experienceData } = props;

  return (
    <div className={global["bg--black"]}>
      <Head>
        <title>Kitman Yiu | Full Stack Developer | Experience</title>
        <meta
          name="description"
          content={
            "Hi I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"
          }
        />
        <meta
          property="og:title"
          content="Kitman Yiu | Full Stack Developer | About"
          key="title"
        />
        <meta
          property="og:description"
          content={
            "Hi I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"
          }
        />
        <meta
          name="twitter:title"
          content={"Kitman Yiu | Full Stack Developer | About"}
        />
        <meta
          name="twitter:description"
          content={
            "Hi I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"
          }
        />
      </Head>
      <Header />
      <div className={[global.row, global.container__main].join(" ")}>
        <DeatilsInfo introData={introData} />
        <MainContent>
          <div>
            <h2 className={global.h2}>
              MY <span className={global["color--grey"]}>EXPERIENCE</span>
              <span
                className={[global["background"], style["resume"]].join(" ")}
              >
                EXPERIENCE
              </span>
            </h2>
          </div>
          <div className="col-md-12">
            <TimeLine>
              {experienceData.map((item) => (
                <TimeLineItem
                  key={item.company}
                  title={item.title}
                  period={item.period}
                  company={item.company}
                  desc={item.desc}
                  url={item.url}
                />
              ))}
            </TimeLine>
            <div
              className={[global["align-right"], style.link__container].join(
                " "
              )}
            >
              <a
                rel="dofollow"
                href={"https://www.linkedin.com/in/kitman-yiu/"}
                className={global.link}
                target="_blank"
              >
                See More...
              </a>
            </div>
          </div>
          <div>
            <h2 className={global.h2}>
              MY <span className={global["color--grey"]}>EDUCATION</span>
              <span
                className={[global["background"], style["resume"]].join(" ")}
              >
                EDUCATION
              </span>
            </h2>
            <hr className={global.line} />
          </div>
          <div className="col-md-12">
            <TimeLine>
              {educationD.map((item, index) => (
                <TimeLineItem
                  key={index}
                  title={item.title}
                  period={item.period}
                  company={item.company}
                  desc={item.desc}
                  url={item.url}
                />
              ))}
            </TimeLine>
            <div
              className={[global["align-right"], style.link__container].join(
                " "
              )}
            >
              <a
                rel="dofollow"
                href={"https://www.linkedin.com/in/kitman-yiu/"}
                className={global.link}
                target="_blank"
              >
                See More...
              </a>
            </div>
          </div>
        </MainContent>
      </div>
      <Canvas />
      <Footer introData={introData} />
    </div>
  );
};

export default Experience;

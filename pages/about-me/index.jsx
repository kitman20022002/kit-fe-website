import React from "react";
import Header from "../../src/components/Header/Header";
import global from "../../src/components/Global/global.module.css";
import style from "./index.module.css";
import DetailsInfo from "../../src/components/DeatilsInfo/DeatilsInfo";
import { FaAws } from "react-icons/fa";
import { SiJavascript, SiLaravel } from "react-icons/si";
import Head from "../../node_modules/next/head";
import Footer from "../../src/components/Footer/Footer";
import Item from "../../src/components/Item/Item";
import Canvas from "../../src/components/Canvas/Canvas";
import MainContent from "../../src/components/HOC/Content/MainContent";
import { introData, aboutData } from "../../data/aboutMe";

const AboutMe = () => {
  const skills = [
    {
      icon: <FaAws />,
      title: "AWS",
      content: "S3, ELB, CDN, SES, Lambda, EC2 etc...",
    },
    {
      icon: <SiJavascript />,
      title: "React",
      content:
        "Virtual Dom, Reconciliation, Fibers \n" +
        "                                    etc.....",
    },
    {
      icon: <SiLaravel />,
      title: "Spring",
      content: "Spring Beans, MVC, JPA, Spring Security",
    },
  ];

  // http://preview.themeforest.net/item/vcard2-resume-cv-portfolio/full_screen_preview/24655254?clickid=1jPU4G2-UxyLRw3wUx0Mo3kVUkEyar1kXQuSxU0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=1223214&mp_value1=&utm_campaign=af_impact_radius_1223214&utm_medium=affiliate&utm_source=impact_radius
  // https://previews.customer.envatousercontent.com/files/21615980/_screenshots/01_preview.__large_preview.jpg
  return (
    <div className={global["bg--black"]}>
      <Head>
        <title>Kitman Yiu | Full Stack Developer | About</title>
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
        <DetailsInfo introData={introData} />
        <MainContent>
          <div className={style.desc__container}>
            <h2 className={global.h2}>DESCRIPTION</h2>
            <p className={global.p}>
              A passion Web Developer who has experience in decreasing
              development time by writing{" "}
              <b>clean, stable, and scalable code</b> for the business. I am
              also an <b>active learner</b> who always likes to learn and share
              my knowledge with others. Most importantly I am very good at
              collaborating and communicating with others, especially in{" "}
              <b>Agile/Scrum teams</b>.
            </p>
          </div>
          <div>
            <div className={global.headerContainer}>
              <h2 className={global.h2}>
                ABOUT <span className={global["color--grey"]}>ME</span>
                <span className={global["background"]}>ME</span>
              </h2>
            </div>
            <div className={style.card__container}>
              {aboutData.map((item) => (
                <Item
                  key={item.title}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
          <div>
            <div className={global.headerContainer}>
              <h2 className={global.h2}>
                SKILLS <span className={global["color--grey"]}>HIGHLIGHT</span>
                <span className={global["background"]}>SKILLS</span>
              </h2>
              <a
                rel="dofollow"
                href={"https://skills.kitmanyiu.com"}
                className={global.link}
                target="_blank"
              >
                See More...
              </a>
            </div>

            <div className={style.card__container}>
              {skills.map((item, index) => (
                <Item
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </div>
        </MainContent>
      </div>
      <Canvas />
      {/*<img className={style.bg__img} src={"https://media.istockphoto.com/photos/red-triangles-extruded-and-free-space-3d-render-picture-id941461876"}/>*/}
      <Footer introData={introData} />
    </div>
  );
};

export default AboutMe;

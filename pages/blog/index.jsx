import React from "react";
import Header from "../../src/components/Header/Header";
import global from "../../src/components/Global/global.module.css";
import style from "./index.module.css";
import DeatilsInfo from "../../src/components/DeatilsInfo/DeatilsInfo";
import Head from "../../node_modules/next/head";
import Footer from "../../src/components/Footer/Footer";
import Canvas from "../../src/components/Canvas/Canvas";
import MainContent from "../../src/components/HOC/Content/MainContent";
import { introData } from "../../data/aboutMe";
import { getBlog } from "../../api/admin";
import { BlogInfo } from "../../src/components/BlogInfo/BlogInfo";

//getBlog

export async function getServerSideProps() {
  // Get external data from the file system, API, DB, etc.
  const res = await getBlog();
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      data: res?.data,
    },
  };
}

const Blog = (props) => {
  const { data } = props;
  console.log(data.items);
  return (
    <div className={global["bg--black"]}>
      <Head>
        <title>Kitman Yiu | Full Stack Developer | Blog</title>
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
          <div className={style.desc__container}>
            <h2 className={global.h2}>BLOG</h2>
            <hr className={global.line} />
            <div className={global.blogContainers}>
              {Object.keys(data.items).map((key) => (
                <BlogInfo
                  data={data.items[key]}
                  category={key}
                  key={data.items[key].name}
                />
              ))}
            </div>
          </div>
        </MainContent>
      </div>
      <Canvas />
      <Footer introData={introData} />
    </div>
  );
};

export default Blog;

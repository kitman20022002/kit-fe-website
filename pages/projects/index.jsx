import React from 'react';
import Header from "../../src/components/Header/Header";
import global from '../../src/components/Global/global.module.css';
import style from './index.module.css';
import DeatilsInfo from "../../src/components/DeatilsInfo/DeatilsInfo";
import Head from "../../node_modules/next/head";
import Footer from "../../src/components/Footer/Footer";
import ProjectCard from "../../src/components/ProjectCard/ProjectCard";
import Canvas from "../../src/components/Canvas/Canvas";
import axios from "axios";
import {getIntro} from "../../api/admin";
import MainContent from "../../src/components/HOC/Content/MainContent";


export async function getServerSideProps() {
    // Get external data from the file system, API, DB, etc.
    const [ introD] = await axios.all([ getIntro()]);

    // The value of the `props` key will be
    //  passed to the `Home` component
    return {
        props: {
            introData: JSON.parse(introD.content)
        }
    }
}

const Project = (props) => {
    const {introData} = props;

    return (
        <div className={global["bg--black"]}>
            <Head>
                <title>Kitman Yiu | Full Stack Developer | Project</title>
                <meta name="description"
                      content={"Hi I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"}/>
                <meta property="og:title" content="Kitman Yiu | Full Stack Developer | About" key="title"/>
                <meta property="og:description"
                      content={"Hi I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"}/>
                <meta name="twitter:title" content={"Kitman Yiu | Full Stack Developer | About"}/>
                <meta name="twitter:description"
                      content={"Hi I'm enthusiastic, self-motivated, reliable, responsible and hard working full stack developer who works in Sydney"}/>
            </Head>
            <Header/>
            <div className={[global.row, global.container__main].join(' ')}>
                <DeatilsInfo introData={introData}/>
                <MainContent>
                    <div className={style.desc__container}>
                        <h2 className={global.h2}>MY <span className={global['color--blue']}>PROJECTS</span></h2>
                        <hr className={global.line}/>
                        <p className={global.p}>Go as far as you can see, your future is created by what you do
                            today. <br/>-
                            Kitman Yiu</p>
                    </div>
                    <div className={style.project__container}>
                        <ProjectCard title={"ACY"} content={"React, HTML, CSS"}/>
                        <ProjectCard title={"ACY"} content={"React, HTML, CSS"}/>
                        <ProjectCard title={"ACY"} content={"React, HTML, CSS"}/>
                        <ProjectCard title={"ACY"} content={"React, HTML, CSS"}/>
                        <ProjectCard title={"ACY"} content={"React, HTML, CSS"}/>
                        <ProjectCard title={"ACY"} content={"React, HTML, CSS"}/>
                    </div>
                </MainContent>
            </div>
            <Canvas/>
            <Footer introData={introData}/>
        </div>
    )
};

export default Project;

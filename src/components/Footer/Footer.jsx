import React from 'react';

import footer from './Footer.module.css';
import global from '../Global/global.module.css';

import {FaTwitterSquare, FaFacebookSquare, FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import {IconContext} from "react-icons";
const Footer = (props) => {
    const { introData } = props;
    return (
        <footer className={footer.footer}>
            <div className={[footer.box,footer.empty].join(' ')}/>
            <div className={[footer.box,footer["box-center"]].join(' ')}>
                <p className="footer__text">© {(new Date().getFullYear())} All Right Reserved. Created By Kitman Yiu</p>
            </div>
            <div className={[footer.box,footer["box-right"], footer["social-media__container"]].join(' ')}>
                <a href={introData.twitter} className={footer["social-media__link"]}>
                    <IconContext.Provider value={{className: [global["react-icon"],global['react-icon--blue']].join(' ')}}>
                        <FaTwitterSquare/>
                    </IconContext.Provider>
                </a>
                <a href={introData.linkedIn} className={footer["social-media__link"]}>
                    <IconContext.Provider value={{className: [global["react-icon"],global['react-icon--blue']].join(' ')}}>
                        <FaLinkedin/>
                    </IconContext.Provider>
                </a>
                <a href={introData.facebook} className={footer["social-media__link"]}>
                    <IconContext.Provider value={{className: [global["react-icon"],global['react-icon--blue']].join(' ')}}>
                        <FaFacebookSquare/>
                    </IconContext.Provider>
                </a>
                <a href={introData.github} className={footer["social-media__link"]}>
                    <IconContext.Provider value={{className: [global["react-icon"],global['react-icon--blue']].join(' ')}}>
                        <FaGithubSquare/>
                    </IconContext.Provider>
                </a>
            </div>
        </footer>
    )
};

export default Footer;

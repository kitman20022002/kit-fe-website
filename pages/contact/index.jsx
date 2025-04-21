import React from 'react';
import Link from 'next/link';
import Header from '../../src/components/Header/Header';
import global from '../../src/components/Global/global.module.css';
import style from './index.module.css';
import DeatilsInfo from '../../src/components/DeatilsInfo/DeatilsInfo';
import Head from '../../node_modules/next/head';
import Footer from '../../src/components/Footer/Footer';
import {storeContact} from "../../api/contact";
import Modal from '../../src/components/Modal/Modal';
import Canvas from '../../src/components/Canvas/Canvas';

import {IconContext} from "react-icons";
import {BsCardText, BsPerson, BsPhone} from "react-icons/bs";
import {GoMail} from "react-icons/go";
import MainContent from "../../src/components/HOC/Content/MainContent";
import {introData} from '../../data/aboutMe';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                name: {
                    elementConfig: {
                        placeholder: 'kitmanwork@gmail.com'
                    },
                    validation: {
                        required: true,
                        isEmail: true
                    },
                    errorMessage: {
                        email: "Not valid Email",
                        required: 'Email is required',
                    },
                    valid: false,
                    value: '',
                    cssClass: '',
                },
                phone: {
                    elementConfig: {
                        placeholder: 'kitmanwork@gmail.com'
                    },
                    validation: {
                        required: true,
                    },
                    errorMessage: {
                        required: 'Password is required',
                    },
                    valid: false,
                    value: '',
                    cssClass: '',
                },
                email: {
                    elementConfig: {
                        placeholder: 'kitmanwork@gmail.com'
                    },
                    validation: {
                        required: true,
                    },
                    errorMessage: {
                        required: 'Password is required',
                    },
                    valid: false,
                    value: '',
                    cssClass: '',
                },
                message: {
                    elementConfig: {
                        placeholder: 'kitmanwork@gmail.com'
                    },
                    validation: {
                        required: true,
                    },
                    errorMessage: {
                        required: 'Password is required',
                    },
                    valid: false,
                    value: '',
                    cssClass: '',
                },
            },
            isLoading: false,
            showModal: false,
            message: ''
        };
    }

    closeModal = () => {
        this.setState({showModal: false});
    };

    onChange = (e) => {
        const updatedFormElement = {
            ...this.state.form[e.target.name]
        };
        let formData = this.state.form;
        formData[e.target.name] = updatedFormElement;
        updatedFormElement.value = e.target.value;
        this.setState({formData: updatedFormElement});
    };


    handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            'name': this.state.form.name.value,
            'email': this.state.form.email.value,
            'phone': this.state.form.phone.value,
            'message': this.state.form.message.value
        };

        let res = await storeContact(data).catch((error) => {
            this.setState({showModal: true, message: "error"});
        });
        if (res.statusCode === 200) {
            let formData = this.state.form;
            formData.name.value = '';
            formData.email.value = '';
            formData.message.value = '';
            formData.phone.value = '';

            this.setState({showModal: true, form: formData, message: "Submitted"});
        }
    };

    render() {
        return (
            <div className={global["bg--black"]}>
                <Head>
                    <title>Kitman Yiu | Full Stack Developer | Contact</title>
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
                            <h2 className={global.h2}>CONTACT<span
                                className={[global['background'], style['contact-header']].join(' ')}>CONTACT</span>
                            </h2>
                            <p className={global.p}>Go as far as you can see, your future is created by what you do
                                today. <br/>-
                                Kitman Yiu</p>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className={style["styled-input"]}>
                                <IconContext.Provider value={{className: global["contact-form-icon"]}}>
                                    <BsPerson/>
                                </IconContext.Provider>
                                <input type="text" onChange={this.onChange} name={"name"}
                                       value={this.state.form.name.value}
                                       required/>
                                <label htmlFor="name">Name</label>
                                <span></span>
                            </div>
                            <div className={style["styled-input"]}>
                                <IconContext.Provider value={{className: global["contact-form-icon"]}}>
                                    <GoMail/>
                                </IconContext.Provider>
                                <input type="email" onChange={this.onChange} name="email"
                                       value={this.state.form.email.value}
                                       required/>
                                <label htmlFor="email">Email</label>
                                <span></span>
                            </div>
                            <div className={style["styled-input"]}>
                                <IconContext.Provider value={{className: global["contact-form-icon"]}}>
                                    <BsPhone/>
                                </IconContext.Provider>
                                <input type="tel" onChange={this.onChange} name={"phone"}
                                       value={this.state.form.phone.value}
                                       required/>
                                <label htmlFor="phone">Phone</label>
                                <span></span>
                            </div>
                            <div className={style["styled-input"]}>
                                <IconContext.Provider value={{className: global["contact-form-icon"]}}>
                                    <BsCardText/>
                                </IconContext.Provider>
                                <textarea required onChange={this.onChange} name="message"
                                          value={this.state.form.message.value}></textarea>
                                <label htmlFor="message">Message</label>
                                <span></span>
                            </div>
                            <button className={global["btn-10"]} href="#"><span>Submit</span></button>
                        </form>
                        {this.state.showModal ? <Modal closeModal={this.closeModal}/> : ''}
                    </MainContent>
                </div>
                <Canvas/>
                <Footer introData={introData}/>
            </div>
        )
    }
}


export default Contact;

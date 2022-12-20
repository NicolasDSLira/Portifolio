import React from "react";
import Layout from "../components/layout";
import Styles from "../styles/curriculo.module.css"
import Image from 'next/image'
import Head from "next/head"
import { Link } from "react-scroll";

export default function Curriculo() {

    return (
        <Layout>
            <Head>
                <title> CURRICULO </title>
            </Head>

            <div className={Styles.sectionsMain}>
                <section className={Styles.sectionRight}>
                    <div className={Styles.foto}>
                        <Image
                            className={Styles.fotoMy}
                            src="/me.webp"
                            width={150}
                            height={150}
                            priority
                        />
                    </div>
                    <div className={Styles.contact}>
                        <h1>Contact ME</h1>
                        <hr className={Styles.line}></hr>
                        <div className={Styles.itemContact}>
                            <div className={Styles.iconContact}>
                                <Image
                                    className={Styles.icon}
                                    src="/icons/location.png"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className={Styles.container}>
                                <h3 >Addres</h3>
                                <p>Ferraz de vasconcelos, São Paulo - Brasil</p>
                            </div>
                        </div>

                        <div className={Styles.itemContact}>
                            <div className={Styles.iconContact}>
                                <Image
                                    className={Styles.icon}
                                    src="/icons/phone.png"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className={Styles.container}>
                                <h3>Phone</h3>
                                <p>+55 11</p>
                            </div>
                        </div>

                        <div className={Styles.itemContact}>
                            <div className={Styles.iconContact}>
                                <Image
                                    className={Styles.icon}
                                    src="/icons/web.png"
                                    width={50}
                                    height={50}
                                />
                            </div>
                            <div className={Styles.container}>
                                <h3>WEB</h3>
                                <p>nicolasdslira@gmail.com</p>
                                <p>nicolasdslira.vercel.app</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h1>Pro Skill</h1>
                        <hr className={Styles.line}></hr>
                        <ul className={Styles.mySkills}>
                            <li>HTML5 and CSS3</li>
                            <li>JavaScript - ES6</li>
                            <li>React and NextJS</li>
                            <li>React Native</li>
                            <li>C and C++</li>
                            <li>C# - DotNet</li>
                            <li>java</li>
                            <li>PHP - Laravel</li>
                            <li>SQL - MySQL</li>
                            <li>NODE</li>
                            <li>Excel, Word and Power Point</li>
                            <li>Figma</li>
                            <li>Canva and Photoshop</li>
                        </ul>
                    </div>
                </section>
                <section className={Styles.sectionLeft}>
                    <div className={Styles.topLeft}>
                        <h1 className={Styles.MyName}>Nicolas Lira</h1>
                        <h2 className={Styles.MyPro}> Analist System</h2>
                    </div>

                    <div>
                        <div className={Styles.inline}>
                            <h2>Experience</h2>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>Trabalho voluntário, <span>EE. Carlindo Reis— Grêmio estudantil.</span></h2>
                            <p>2019</p>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>Recenseador, <span>IBGE - Instituto Brasileiro de Geografia e Estatística.</span></h2>
                            <p>2022</p>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>Auxiliar de Logística, <span>Grupo Evereste.</span></h2>
                            <p>2022</p>
                        </div>
                    </div>

                    <div>
                        <div className={Styles.inline}>
                            <h2>Education</h2>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>Ensino médio - <span>E.E Carlindo Reis, Ferraz de Vasconcelos.</span></h2>
                            <p>2019 - 2021</p>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>Técnico em desenvolvimento de sistemas - <span>ETEC, Unidade de guaianazes</span></h2>
                            <p>01/2020 - 06/2021</p>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>Tecnólogo em análise e desenvolvimento de sistemas - <span>UNIP, Polo Ferraz de Vasconcelos</span></h2>
                            <p>2022 -  ~</p>
                        </div>
                    </div>

                    <div>
                        <div className={Styles.inline}>
                            <h2>courses</h2>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}> Carrefour Web Developer - <span>Digital Innovation One.</span></h2>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>Fundamentos das aplicações Móveis - <span>Fundação Bradesco.</span></h2>
                        </div>
                        <div className={Styles.m5}>
                            <h2 className={Styles.itemConteiner}>RH do trabalho - <span>Microlins Suzano.</span></h2>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )

}
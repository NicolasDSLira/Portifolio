import react from "react";
import styles from "../styles/navbar.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

    const [active, setActive] = react.useState(false);
    const showMenu = () => {
        setActive(!active);
    };

    return (
        <nav className={styles.navbar} id="navbar">
            <div className={styles.containerVisible}>
                <Image
                    src="/NL.svg"
                    className={styles.logo}
                    alt="Logo NL"
                    width={80}
                    height={80}
                />
                <div>
                    <input type="checkbox" className={styles.input} checked={active} onChange={showMenu} id="checkMenu"></input>
                    <label className={styles.hamburguerbtn} for="checkMenu">

                        <div className={styles.menu}>
                            <span className={styles.hamburguer}></span>
                        </div>
                    </label>
                </div>
            </div>

            <div className={active ? styles.containerList : styles.containerListHidden}>

                <li className={styles.list}>
                    <Link href="/" className={styles.item}>Portifolio</Link>
                    <Link href="/" className={styles.item}>curriculum</Link>
                    <Link href="/" className={styles.item}>Contato</Link>
                </li>
                <div className={styles.item}>
                    <a className={styles.socialLink} href="https://github.com/NicolasDSLira/">
                        <Image
                            src="/ImgNav/github.png"
                            className={styles.social}
                            alt="Logo NL"
                            width={25}
                            height={25}
                        />
                    </a>

                    <a className={styles.socialLink} href="https://www.instagram.com/nl.developer/">
                        <Image
                            src="/ImgNav/instagram.png"
                            className={styles.social}
                            alt="Logo NL"
                            width={25}
                            height={25}
                        />
                    </a>

                    <a className={styles.socialLink} href="https://www.linkedin.com/in/nicolas-lira-4a704b21b/">
                        <Image
                            src="/ImgNav/linkedin.png"
                            className={styles.social}
                            alt="Logo NL"
                            width={25}
                            height={25}
                        />
                    </a>

                    <a className={styles.socialLink} href="https://twitter.com/Nicolas46765868">
                        <Image
                            src="/ImgNav/twitter.png"
                            className={styles.social}
                            alt="Logo NL"
                            width={25}
                            height={25}
                        />
                    </a>
                </div>

            </div>

        </nav>
    )
}
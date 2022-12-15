import styles from "../styles/Footer.module.css"
import { Link, animateScroll as scroll } from "react-scroll";


export default function Footer(){
    return(
    <div className={styles.container}>
        
        <Link
                to="navbar"
                spy={false}
                smooth={true}
                offset={0}
                duration={500}
                className={styles.toTopScroll}
            >
                <span class="material-symbols-outlined">keyboard_double_arrow_up</span>
            </Link>
        <footer className={styles.footer}>
            <h3 className={styles.titleFooter}>© 2023 Nicolas Lira</h3>
            <div>
                <Link href="/About" className={styles.item}>About</Link>
                <Link href="/Portifolio" className={styles.item}>Portifolio</Link>
                <Link href="/Contact" className={styles.item}>Contact</Link></div>
        </footer>
    </div>
    )
}
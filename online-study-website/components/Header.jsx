import { navLinks } from '../src/data'
import Link from 'next/link'
import styles from './styles/Header.module.css'

export default function Header () {
    return (
        <header>
            <Link href={'/'}>
                <a className={styles.navName}>Online Study Prediction</a>
            </Link>
            <nav>
                {
                    navLinks.map((link, index) => {
                        return (
                            <ul className={styles.navList}>
                                <Link href={link.path}>
                                    {/* <li key={index} className={styles.navLink}> */}
                                    <a>{link.name}</a>
                                    {/* </li> */}
                                </Link>
                            </ul>
                        )
                    })
                }
            </nav>
        </header>
    );
}
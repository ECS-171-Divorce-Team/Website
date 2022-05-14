import Link from 'next/link'
import styles from './styles/Footer.module.css'

export default function Footer () {
    return (
        <footer>
            <h2 className={styles.teamName}>Online Study Prediction</h2>
            <div className={styles.contactContainer}>
                <ul className={styles.leftCol}>
                    <p className={styles.contactDetails}>UC Davis Address</p>
                    <p className={styles.contactDetails}>City, State</p>
                </ul>
                <ul className={styles.rightCol}>
                    <p className={styles.contactDetails}>Phone number</p>
                    <Link href='mailto:email@example.com'>
                        <a className={styles.contactDetails}>email@example.com</a>
                    </Link>
                </ul>
            </div>
        </footer>
    )
}
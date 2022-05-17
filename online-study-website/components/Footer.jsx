import Link from 'next/link'
import styles from './styles/Footer.module.css'

export default function Footer () {
    return (
        <footer className={`container mx-3 my-3 border-top`}>
            <h2 className={`my-4 ${styles.teamName}`}>Online Study Prediction</h2>
            <div className={`row ${styles.contactContainer}`}>
                <ul className={`col-md-3 ${styles.leftCol}`}>
                    <p className={styles.contactDetails}>UC Davis Address</p>
                    <p className={styles.contactDetails}>City, State</p>
                </ul>
                <ul className={`col ${styles.rightCol}`}>
                    <p className={styles.contactDetails}>Phone number</p>
                    <Link href='mailto:email@example.com'>
                        <a className={styles.contactDetails}>email@example.com</a>
                    </Link>
                </ul>
            </div>
        </footer>
    )
}
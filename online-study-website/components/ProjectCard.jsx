import styles from './styles/ProjectCard.module.css'
import Link from 'next/link'

export default function ProjectCard ({ imgURL, cardTitle, cardText, pageLink }) {
    return (
        <div className={`card border-0 ${styles.container}`}>
            <img className={`card-img-top ${styles.image}`} src={imgURL} />
            <div className={`card-body container-fluid ${styles.cardBody}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>{cardTitle}</h5>
                <p className={`card-text ${styles.cardText}`}>{cardText}</p>
                <div className='text-end'>
                    <Link href={pageLink}>
                        <a className='btn btn-dark'>See Model</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
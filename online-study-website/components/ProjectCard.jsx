import styles from './styles/ProjectCard.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard ({ imgURL, cardTitle, cardText, pageLink }) {
    return (
        <div className={`card border-0 ${styles.container}`}>
            <div className='card-img-top'>
                <Image src={imgURL} width={1787} height={600} />
            </div>
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
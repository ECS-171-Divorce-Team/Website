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
                <div className='row'>
                    <div className='col'>
                        <h5 className={`card-title ${styles.cardTitle}`} style={{ height: '50%' }}>{cardTitle}</h5>
                        <p className={`card-text ${styles.cardText}`} style={{ height: '50%' }}>{cardText}</p>
                    </div>
                    <div className='col text-end' style={{height: '100%'}}>
                        <Link href={pageLink}>
                            <a className='btn btn-dark'>See Model</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
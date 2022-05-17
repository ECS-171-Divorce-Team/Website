import styles from './styles/ProjectCard.module.css'

export default function ProjectCard ({ imgURL, cardTitle, cardText }) {
    return (
        <div className={`card ${styles.container}`}>
            <img className={`card-img-top ${styles.image}`} src={imgURL} />
            <div className={`card-body ${styles.cardBody}`}>
                <h5 className={`card-title ${styles.cardTitle}`}>{cardTitle}</h5>
                <p className={`card-text ${styles.cardText}`}>{cardText}</p>
            </div>
        </div>
    )
}
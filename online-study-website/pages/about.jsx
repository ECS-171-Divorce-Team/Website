import styles from '../styles/About.module.css'

export default function About () {
    return (
        <div className={`container ${styles.pageContainer}`}>
            <div className='row'>
                <h1 className={`display-1 col ${styles.pageTitle}`}>{`About`}</h1>

                <p className={`col ${styles.pageParagraph}`}>{'We think of architecture not as a single practice, but as several interlocking ones. Landscapes are inseparable from structures, ecology is inseparable from building requirements, and improving human relationships is the ultimate goal of any project. Aesthetic movements come and go, but we have found these principles to be timeless.'}
                </p>
            </div>

            
        </div>
    )
}
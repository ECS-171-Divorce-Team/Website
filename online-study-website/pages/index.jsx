import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Home.module.css'
import { models } from '../src/projectData'

export default function Home () {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <h1 className={`display-1 ${styles.pageTitle}`}>{`Online Studying is Important blah blah blah dfkljakljdfkljalkdsfjlkasjdf`}</h1>
      <div className={styles.projectSection}>
        {
          models.map((elem) => {
            return (
              <ProjectCard
                cardTitle={elem.modelName}
                cardText={elem.modelDetails}
                imgURL={elem.modelPicPath}
                pageLink={elem.modelPageURL} />
            )
          })
        }
      </div>
    </div>
  )
}

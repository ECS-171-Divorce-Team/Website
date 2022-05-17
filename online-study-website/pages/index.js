import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div className={styles.container}>
      <h1 className={`display-1 ${styles.pageTitle}`}>{`Online Studying is Important blah blah blah`}</h1>
      <img className='img-fluid' src='/backgrounds/home.jpg'/>
      <div className={styles.modelSection}>
        <ProjectCard
          imgURL={'/graphs/output.png'}
          cardTitle='Model 1'
          cardText='Demo text for the card component' />
      </div>
    </div>
  )
}

import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Home () {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <h1 className={`display-1 ${styles.pageTitle}`}>{`Online Studying is Important blah blah blah dfkljakljdfkljalkdsfjlkasjdf`}</h1>
      <img className='img-fluid' src='/backgrounds/home.jpg' />
      <div className={`container-fluid ${styles.modelSection}`}>
        <div className='row justify-content-evenly mt-5'>
          <div className='col-4'>
            <ProjectCard
              imgURL={'/graphs/output.png'}
              cardTitle='Model 1'
              cardText='Demo text for the card component' />
          </div>
          <div className='col-4'>
            <ProjectCard
              imgURL={'/graphs/output.png'}
              cardTitle='Model 2'
              cardText='Demo text for the card component' />
          </div>
        </div>
        <div className='row justify-content-evenly mt-5'>
          <div className='col-4'>
            <ProjectCard
              imgURL={'/graphs/output.png'}
              cardTitle='Model 1'
              cardText='Demo text for the card component' />
          </div>
          <div className='col-4'>
            <ProjectCard
              imgURL={'/graphs/output.png'}
              cardTitle='Model 2'
              cardText='Demo text for the card component' />
          </div>
        </div>
      </div>
    </div>
  )
}

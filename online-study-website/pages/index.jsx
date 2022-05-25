import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import GraphCarousel from '../components/GraphCarousel'

export default function Home () {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <h1 className={`display-1 ${styles.pageTitle}`}>{`Online Studying is Important blah blah blah dfkljakljdfkljalkdsfjlkasjdf`}</h1>
      <div className='mt-5'>
        <GraphCarousel />
      </div>

    </div>
  )
}

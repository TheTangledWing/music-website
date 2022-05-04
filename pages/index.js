import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Picture} from '../components/Picture.js'
import {Footer} from "../components/Footer.js"
import {Card} from "../components/Card.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alan's Musical Projects</title>
        <meta name="tht" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alan's Musical Projects
        </h1>

				<Picture img="../images/gear/alanguitar.jpg"/>

        <p className={styles.description}>
          This is a page dedicated to my love for music. 
        </p>

        <div className={styles.grid}>
        <Card title="My Gear" link="/gear" description="this is a page about my gear" />
        <Card title="Studio Equipment" link="/studio_equipment" description="Check out what I use in the studio" />
        
        </div>
      </main>

      <Footer/>
    </div>
  )
}

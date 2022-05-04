import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Footer} from "../components/Footer.js"
import {Space} from "../components/Space.js"
import {Picture} from "../components/Picture.js"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Gear</title>
        <meta name="description" content= "This is all my gear"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This is all my gear
        </h1>


				<Picture 
					img="../images/gear/guitars.png" 
					title="This is a lot of guitars:" 
					description="This is all the guitars(well half of them)"
				/>

				<Space/>

				<Picture img="../images/gear/alanguitar.jpg"/>

      </main>

  
			<Footer/>
    </div>
  )
}

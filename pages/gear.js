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

				<Picture 
          img="../images/gear/flame.png"
          title="Flame Guitar" 
					description="My oldest guitar. Orignally a horrible shade of blue. I sanded it down and repainted it. Its been through the wars and still just about plays"
          />

        <Picture 
          img="../images/gear/strat.png"
          title="The Strat" 
					description="Bought in the legendary music Store in New York in 2008. This has been my main work horse over the years."
          />

        <Picture 
          img="../images/gear/pacifica.jpg"
          title="My First Guitar" 
					description="My cousin gave me this guitar when I was 11. This set me on the journey of spending thousands of euro on guitars."
          />

        <Picture 
          img="../images/gear/tanglewood.jpg"
          title="Tanglewood" 
					description="Another freebie. This was my uncles guitar. He gave it to me. Its a really beautiful guitar. But badly needs refretting."
          />

        <Picture 
          img="../images/gear/madiera.jpg"
          title="Madiera" 
					description="This guitar is a real gem. Acquired for €20. Its a rare guitar that I have great plans to someday mod and restore to its former glory. "
          />

        <Picture 
          img="../images/gear/takemine.jpg"
          title="Takemine G Series" 
					description="This guitar was given to me as a birthday present by my friend Beaver. It was the first decent acousic guitar I owned."
          />

      </main>

  
			<Footer/>
    </div>
  )
}

import Navbar from '../components/Navbar.js'
import '../styles/globals.css'

function MusicWebsite({ Component, pageProps }) {
  return ( 
  <>
    <Navbar/>

    <Component {...pageProps} />
  </>
)
}
export default MusicWebsite
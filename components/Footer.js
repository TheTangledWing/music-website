import styles from '../styles/Home.module.css'

export function Footer() {

    return (
  
      <footer
  
        className={styles.footer}
  
        //style={{position: 'absolute', bottom: 0, marginTop: '40px', height :'40px}'}}
  
      >
  
        Alan Heraty {new Date().getFullYear()}
  
      </footer>
  
    )
  
  }
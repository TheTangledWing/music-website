import styles from '../styles/Home.module.css'

export function Card(props){
    return (
        <a href={props.link} className={styles.card}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </a>
    )
}





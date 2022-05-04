export function Picture(props){
    return (
        <> 
            <h2>{props.title}</h2>
            <img src={props.img} width={500}></img>
            <p>{props.description}</p>
        </>   
    )
}

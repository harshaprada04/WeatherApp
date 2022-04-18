import classes from"./Card.module.css"

function Card(props:{children:any}){
    return(
        <div className={classes.background}>
            {props.children}
        </div>
    )
}


export default Card;
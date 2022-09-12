import React, {Component} from "react";
import "./PeliculaCard.css"
import "../Main/Main.css"

class  PeliculaCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:""
        }
    }

    render(){
        return(
        <article className='card-container-hijo'>
            <a href={`./DetallePelicula/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/></a>
            <h2>{this.props.title}</h2>  
            <button className='more'onClick >Ver más</button>               
        </article>
           
        )
    }
} 

export default PeliculaCard;
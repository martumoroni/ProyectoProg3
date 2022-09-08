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
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
            <h2>{this.props.title}</h2>  
            <p className='more' >Ver más</p>               
        </article>
           
        )
    }
} 

export default PeliculaCard;
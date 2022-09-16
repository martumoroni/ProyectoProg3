import React, {Component} from "react";
import "./SerieCard.css"
import "../Main/Main.css"
import { Link } from "react-router-dom";

class  SerieCard extends Component{
    constructor(props){
        super(props);
        this.state ={
            value:"",
            verMas: 'verMas'
        }
    }
    click() {
        if (this.state.verMas === 'verMas') {
            this.setState({
                verMas: 'verMenos'
            })}
        else  (this.setState({
            verMas: 'verMas'
        }))  
}
    render(){
        return(
        <article className='card-container-hijo'>
            <Link to={`detalleserie/${this.props.data.id}`}>
            <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt=""/>
            </Link>
            <h2>{this.props.title}</h2> 
            <div className={this.state.verMas}>
                    <h1>{this.props.descripcion} </h1>
                </div>
            <button className='more' onClick={()=>this.click()} > {this.state.verMas} </button>               
        </article>
           
        )
    }
} 

export default SerieCard;
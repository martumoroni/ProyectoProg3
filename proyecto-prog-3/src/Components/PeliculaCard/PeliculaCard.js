import React, { Component } from "react";
import "./PeliculaCard.css"
import "../Main/Main.css"
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            descripcion: '',
            verMas: 'hide',            
        }
       // console.log(props.data.id)
    }
    click() {
        if (this.state.verMas === 'hide') {
            this.setState({
                verMas: 'show'
            })}
        else  (this.setState({
            verMas: 'hide'
        }))   
}
click() {
    if (this.state.verMas === 'hide') {
        this.setState({
            verMas: 'show'
        })}
    else  (this.setState({
        verMas: 'hide'
    }))   
}


    render() {
        return (

            <article className='card-container-hijo'>
               <Link to={`detallepelicula/${this.props.data.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></Link>
                <h2>{this.props.title}</h2>
                <div className={this.state.verMas}>
                    <h1>{this.props.title} </h1>
                </div>
                <button className='more' onClick={()=>this.click()} >Ver más</button>
            </article>

        )
    }
    
}


export default PeliculaCard;
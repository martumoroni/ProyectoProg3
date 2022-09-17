import React, { Component } from "react";
import "./PeliculaCard.css"
import "../Main/Main.css"
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
    constructor(props) {
        super(props);
        console.log('pedazo', props)
        this.state = {
            value: '',
            descripcion: '',
            verMas: 'verMas',            
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

    render() {
        return (

            <article className='card-container-hijo'>
               <Link to={`detallepelicula/${this.props.data.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></Link>
                <h2>{this.props.title}</h2>
                <div className={this.state.verMas}>
                    <h2 className='vermas'> {this.props.data.overview} </h2>
                    <h2>{this.props.data.status} </h2>
                </div>
                <button className='more' onClick={()=>this.click()}>{this.state.verMas} </button>
            </article>

        )
    }
    
}


export default PeliculaCard;
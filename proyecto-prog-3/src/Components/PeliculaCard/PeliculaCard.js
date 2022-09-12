import React, { Component } from "react";
import "./PeliculaCard.css"
import "../Main/Main.css"

class PeliculaCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            descripcion: '',
            verMas: 'hide',            
        }
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
                <a href={`./DetallePelicula/${this.props.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></a>
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
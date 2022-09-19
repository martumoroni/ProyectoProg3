/* c037da6882c3b5641c3425b1e80847bb */ 

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './DetallePelicula.css'

class DetallePelicula extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Number(props.match.params.id),
            datosPelicula: [],
            genres: '',
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c037da6882c3b5641c3425b1e80847bb`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    datosPelicula: data,
                    genres: data.genres[0].name,
                })
                console.log('Data del detalle de peli', data)
            }
            )
            .catch(err => console.log(err))

    }


    render() {
        return (
            
            <article className='detail-card'>
                {this.state.datosPelicula === '' ? <h3>Cargando...</h3> : 
                <div className='todo'>
                <img className='imagen' src={`https://image.tmdb.org/t/p/w500/${this.state.datosPelicula.poster_path}`} alt="" />
            <div className='detail-peli'>
                    <h2>{this.state.datosPelicula.title}</h2>
                    <p>{this.state.datosPelicula.overview}</p>
                    <p>Fecha de estreno (AA-MM-DD): {this.state.datosPelicula.release_date}</p>
                    <p>Califiación: {Math.round(this.state.datosPelicula.vote_average * 100) / 100}</p>
                    <p>Duración: {this.state.datosPelicula.runtime} minutos</p>
                    <p>Generos: {this.state.genres}</p>

            </div>
                </div>}
               

            </article>

        )
    }
    
}

export default DetallePelicula;

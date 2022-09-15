/* c037da6882c3b5641c3425b1e80847bb */ 

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DetalleSerie.css'

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Number(props.match.params.id),
            datosSerie: [],
            genres: '',
            companies: {},
            country: {},
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c037da6882c3b5641c3425b1e80847bb`)
            .then(res => res.json())
            .then(data => this.setState({
                datosSerie: data,
                genres: data.genres[0].name,
                companies: data.production_companies[0],
                country: data.production_countries[0]
            }))
            .catch(err => console.log(err))

    }




    render() {
        return (
            
            <article className='detail-card'>
                {this.state.datosSerie.length == 0 ? <div>Cargando...</div> : 
                <div>
                <img src={`https://image.tmdb.org/t/p/w500/${this.state.datosSerie.poster_path}`} alt="" />
                <div>
                    <h2 className="title-detail">{this.state.datosSerie.title}</h2>
                    <p>{this.state.datosSerie.overview}</p>
                    <p>Fecha de estreno (AA-MM-DD): {this.state.datosSerie.release_date}</p>
                    <p>Califiación: {Math.round(this.state.datosSerie.vote_average * 100) / 100}</p>
                    <p>Duración: {this.state.datosSerie.runtime} minutos</p>
                    <p>Generos: {this.state.genres}</p>
                    <p>Producción: {this.state.companies.name}</p>
                    <p>País de producción: {this.state.country.name}</p>
                </div>
                </div>}

            </article>

        )
    }
    
}

export default DetalleSerie;

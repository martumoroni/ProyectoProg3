/* c037da6882c3b5641c3425b1e80847bb */ 

import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import './DetalleSerie.css'

class DetalleSerie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: Number(props.match.params.id),
            datosSerie: [],
            genres: '',
        }
    }

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/tv/${this.state.id}?api_key=c037da6882c3b5641c3425b1e80847bb`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                datosSerie: data,
                genres: data.genres[0].name,
            })
            console.log('Data del detalle de serie', data)
        }
            )
            .catch(err => console.log(err))

    }




    render() {
        return (
            
            <article className='detail-card'>
                {this.state.datosPelicula === '' ? <h3>Cargando...</h3> :  
                <div className='todo'>
                <img className='imagen' src={`https://image.tmdb.org/t/p/w500/${this.state.datosSerie.poster_path}`} alt="" />
                <div className='detail-serie'>
                    <h2 className="title-detail">{this.state.datosSerie.name}</h2>
                    <p>{this.state.datosSerie.overview}</p>
                    <p>Fecha de estreno (AA-MM-DD): {this.state.datosSerie.last_air_date}</p>
                    <p>Califiación: {Math.round(this.state.datosSerie.vote_average * 100) / 100}</p>
                    <p>Generos: {this.state.genres}</p>
                
                </div>
                </div>}

            </article>

        )
    }
    
}

export default DetalleSerie;

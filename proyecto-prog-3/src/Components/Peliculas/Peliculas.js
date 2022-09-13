import React, {Component} from 'react'
import PeliculaCard from '../PeliculaCard/PeliculaCard';
import './Peliculas.css'

class Peliculas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPeliculas: [],
            dataPeli: [],
}}

componentDidMount() {

    //Mejores Peliculas
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=af93cf6a36d0e3597028097290f9535d")
        .then(response => response.json())
        .then(data => this.setState(
            { dataPeliculas: data.results },
         
        ))
        .catch(error => console.log('el error fue ' + error))
        
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=af93cf6a36d0e3597028097290f9535d')
        .then(response=>response.json())
        .then(data => this.setState(
            { dataPeli: data.results },
         
        ))
        .catch(error => console.log('el error fue ' + error))
    }

    render () {
        return (

            <React.Fragment> 
                <h1>Peliculas</h1>
            <section className='card-container'>
            {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title} genre={unPelicula.genre}/>)}
        </section>            
        <section className='card-container'>
        {this.state.dataPeli.map((unaPeli, idx )=> <PeliculaCard key={unaPeli + idx} data={unaPeli}  image={unaPeli.poster_path} title={unaPeli.title} genre={unaPeli.genre}/>)}
        </section>

        </React.Fragment> 
        );
    };

}

export default Peliculas;
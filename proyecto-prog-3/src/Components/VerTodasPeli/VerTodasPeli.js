import React, {Component} from "react";
import PeliculaCard from '../PeliculaCard/PeliculaCard';
import SerieCard from "../SerieCard/SerieCard"


class VerTodasPeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contadorPeli: 1,
            dataPeliculas: []
        }
    }

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&page=${this.state.contadorPeli}`)
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculas: data.results,
                  contador: this.state.contadorPeli + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    buscarMasPeliculas() {
        
        let peliculasViejas = this.state.dataPeliculas
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d&page=${this.state.contadorPeli}`)

            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculas: peliculasViejas.concat(data.results),
                  contadorPeli: this.state.contadorPeli + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }
    render(){
        return(

            <React.Fragment> 

                <div className="titulo-container">
                    <h2 className="Titulo">Todas las películas</h2>
                    
                </div>
                <section className='card-container'>
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title}/>)}
                </section>

                <button onClick={() => this.buscarMasPeliculas()}>Buscar más películas</button>

            </React.Fragment>


        )
    }
}
export default VerTodasPeli ;
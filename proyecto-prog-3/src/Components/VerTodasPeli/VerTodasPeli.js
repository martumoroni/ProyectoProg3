import React, {Component} from "react";
import PeliculaCard from '../PeliculaCard/PeliculaCard';


class VerTodasPeli extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 1,
            dataPeliculas: []
        }
    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=af93cf6a36d0e3597028097290f9535d")
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculas: data.results,
                  contador: this.state.contador + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    buscarMas() {
        
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d&page=" + this.state.contador)
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculas: data.results,
                  contador: this.state.contador + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }
    render(){
        return(

            <React.Fragment> 

                <div className="titulo-container">
                    <h2 className="Titulo">Todas las películas</h2>
                    <button onClick={() => this.buscarMas()}></button>
                </div>
                <section className='card-container'>
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.name}/>)}
                </section>

            </React.Fragment>


        )
    }
}
export default VerTodasPeli ;
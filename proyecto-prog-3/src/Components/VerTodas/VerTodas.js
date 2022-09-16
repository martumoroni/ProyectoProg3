import React, {Component} from "react";
import PeliculaCard from '../PeliculaCard/PeliculaCard';
import SerieCard from "../SerieCard/SerieCard"
import Buscador from "../Buscador/Buscador";


class VerTodas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contadorPeli: 1,
            contadorSerie: 1,
            dataPeliculas: [],
            dataSeries: [],
        }
    }

    componentDidMount() {

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&page=${this.state.contadorPeli}`)

            .then(response => response.json())
            .then(data => this.setState(
                { 
                  dataPeliculas: data.results,
                  contadorPeli: this.state.contadorPeli + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d&page=${this.state.contadorSerie}`)

            .then(response => response.json())
            .then(data => this.setState(
                {
                  dataSeries:data.results,
                  contadorSerie: this.state.contadorSerie + 1
                }
            )) 
            .catch(error => console.log('el error fue ' + error))    

    }

    buscarData(valor){
        if (valor !== ""){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&query=${valor}&page=1&include_adult=false`)

            .then(resp=>resp.json())
            .then(data => this.setState(
                { dataPeliculas: data.results },
            ))

            .catch(err=>console.log(err))

            fetch(`https://api.themoviedb.org/3/search/tv?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&query=${valor}&page=1&include_adult=false`)

            .then(resp=>resp.json())
            .then(data => this.setState(
                { dataSeries: data.results },
            ))

            .catch(err=>console.log(err))
            
        }
        else{
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&page=${this.state.contadorPeli}`)

            .then(response => response.json())
            .then(data => this.setState(
                { 
                  dataPeliculas: data.results,
                  contadorPeli: this.state.contadorPeli + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d&page=${this.state.contadorSerie}`)

            .then(response => response.json())
            .then(data => this.setState(
                {
                  dataSeries:data.results,
                  contadorSerie: this.state.contadorSerie + 1
                }
            )) 
            .catch(error => console.log('el error fue ' + error))    
        }
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

    buscarMasSeries() {
        
        let seriesViejas = this.state.dataSeries
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d&page=${this.state.contadorSerie}`)

            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: seriesViejas.concat(data.results),
                  contadorSerie: this.state.contadorSerie + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    render(){
        return(

            <React.Fragment>

                <Buscador filtrar={(texto) => this.buscarData(texto)}/>

                <div className="titulo-container">
                    <h2 className="Titulo">Todas las películas</h2>
                    
                </div>
                <section className='card-container'>
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title}/>)}
                </section>

                <button onClick={() => this.buscarMasPeliculas()}>Buscar más películas</button>


                
                <div className="titulo-container">
                    <h2 className="Titulo">Todas las series</h2>
                    
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries+ idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name}/>)}
                </section>

                <button onClick={() => this.buscarMasSeries()}>Buscar más series</button>

            </React.Fragment>


        )
    }
}
export default VerTodas ;
import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import "./Main.css"



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPeliculas: [],
            dataSeries: [],
            dataPeliculasCartel: [],
            resultadoBusquedas: [],
            ready:false,
            readyResultados:false
        }
        console.log("main actualizado")
    }

    buscarData(valor){
        if (valor !== "") {
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
            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=af93cf6a36d0e3597028097290f9535d&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculas: data.results,
                  contadorPeli: this.state.contadorPeli + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
            fetch(`https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d&page=1`)
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results,
                    contadorSerie: this.state.contadorSerie + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
        }
    }      
        
    componentDidMount() {

        //Mejores Peliculas
        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=af93cf6a36d0e3597028097290f9535d`)
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculas: data.results,
                ready: true },
    
            ))
            .catch(error => console.log('el error fue ' + error))

        //Mejores Series

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d`)
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))

            //Peliculas En Cartel
            fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=af93cf6a36d0e3597028097290f9535d`)
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculasCartel: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
        }

    render(){
        return(

            <React.Fragment> 
                <Buscador filtrar ={(texto) => this.buscarData(texto)}/>

                <div className="titulo-container">
                    <h2 className="Titulo"> Mejores Peliculas  </h2>   <a href='./ver-todasPeli'> <h4 className='ver-to'>Ver Todas</h4></a>
                </div>
                <section className='card-container'>
                    {console.log(this.state.dataPeliculas.length, 'verificar')}
                    {this.state.dataPeliculas.length == 0 ? <div> Cargando...</div> : this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title} genre={unPelicula.genres} />)}
                </section>

                <div className="titulo-container">
                    <h2 className="Titulo">Mejores Series</h2>  <a href='./ver-todaSerie'> <h4 className='ver-to'>Ver Todas</h4></a>
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries + idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name}/>)}
                </section>
                <div className="titulo-container">
            <h2>Cartelera</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataPeliculasCartel.map((unPeliculaC, idx )=> <PeliculaCard key={unPeliculaC + idx} data={unPeliculaC}  image={unPeliculaC.poster_path} title={unPeliculaC.title} genre={unPeliculaC.genre} />)}
                </section>  
            </React.Fragment>
        )
    }
}

export default Main ;
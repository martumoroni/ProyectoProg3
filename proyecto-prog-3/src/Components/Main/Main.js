import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import "./Main.css"

//import Buscador from "../Buscador/Buscador";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPeliculas: [],
            dataSeries: [],
            dataPeliculasCartel: [],
        }
    }
buscarData(valor){
fetch(`https://api.themoviedb.org/3/search/company?api_key=af93cf6a36d0e3597028097290f9535d&page=1`)
.then(resp=>resp.json)
.then(data=>console.log(data))
.catch(err=>console.log(err))
}
    componentDidMount() {

        //Mejores Peliculas
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=af93cf6a36d0e3597028097290f9535d")
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculas: data.results },
             
            ))
            .catch(error => console.log('el error fue ' + error))

        //Mejores Series

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d")
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))

            //Peliculas En Cartel
            fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=af93cf6a36d0e3597028097290f9535d')
            .then(response => response.json())
            .then(data => this.setState(
                { dataPeliculasCartel: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
            
            fetch('https://api.themoviedb.org/3/movie/{movie_id}?api_key=af93cf6a36d0e3597028097290f9535d')
            .then(response => response.json())
            .then(data => this.setState(
                { detalle: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
        }
    render(){
        return(

            <React.Fragment> 
                <Buscador/>

                <div className="titulo-container">
                    <h2 className="Titulo"> Mejores Peliculas  </h2>   
                    <a href='./Peliculas'> <h4>Ver Todas</h4></a>
                   
                </div>
                <section className='card-container'>
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title} genre={unPelicula.genre} />)}
                </section>

                <div className="titulo-container">
                    <h2 className="Titulo">Mejores Series</h2>
                </div>
                <a href='./Series'> <h4>Ver Todas</h4></a>
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
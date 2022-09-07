import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import "./Main.css"


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPelicula: [],
            dataSeries: []
        }
    }

    componentDidMount() {

        //Mejores Peliculas
        fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=af93cf6a36d0e3597028097290f9535d")
            .then(response => response.json())
            .then(data => this.setState(
                { dataPelicula: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))

        //Mejores Series

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d")
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
    }
    render(){
        return(

            <React.Fragment> 
               
                <div className="titulo-container">
                    <h2 className="Titulo">Peliculas</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataPelicula.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title}/>)}
                </section>



                <div className="titulo-container">
                    <h2 className="Titulo">Series</h2>
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries + idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name}/>)}
                </section>

            </React.Fragment>


        )
    }
}
export default Main ;
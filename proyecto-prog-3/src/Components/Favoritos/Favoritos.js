import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import './Favoritos.css'



class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPeliculas: [],
            dataSeries: [],
        }
    };

    componentDidMount(){
        let traigoFavsPeliculas = localStorage.getItem(`favoritosPeliculas`)
       
        if(traigoFavsPeliculas !==null){
            
        let parseado = JSON.parse(traigoFavsPeliculas) 

            parseado.map(element => {
                return(
                    fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=ec7d1aeea6d41d212821b84124febd74`)
                    .then(response => response.json())

                    .then(data => this.setState({
                        dataPeliculas: this.state.dataPeliculas.concat(data)
                    }))
            
                    .catch(err => console.log(err))
                )
            })
        


        }

    }

    

    render () {

        console.log(this.state.dataPeliculas)
        console.log(this.state.dataSeries)

        return (
        <React.Fragment>

             <h2>Tus películas favoritas</h2>

             <section className='card-container'>
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title} favorito={(idx)=> this.favorites(idx)}/>)}

                </section>

            <h2>Tus series favoritas</h2>

            <section className='card-container'>
                  {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries+ idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name} favorito={(idx)=> this.favorites(idx)}/>)}

            </section>

        </React.Fragment>
        );
    };

}

export default Favoritos;
import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import SerieCard from "../SerieCard/SerieCard";
import './Favoritos.css'



class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrayFavs: [],
            dataPeliculas: [],
            dataSeries: [],
        }
    };

    componentDidMount(){
        let traigoFavs = localStorage.getItem(`favoritos`)
       
        if(traigoFavs !==null){
            
        let parseado = JSON.parse(traigoFavs) 

        Promise.all(
            parseado.map(element => {
                return(
                    fetch(`https://api.themoviedb.org/3/movie/${element}?api_key=ec7d1aeea6d41d212821b84124febd74`)
                    .then(response => response.json())
                    .then (data => data)
                )
            })
        )

        .then(data => this.setState({
            arrayFavs: data
        }))

        .catch(err => console.log(err))

        Promise.all(
            parseado.map(element => {
                return(
                    fetch(`https://api.themoviedb.org/3/tv/${element}?api_key=ec7d1aeea6d41d212821b84124febd74`)
                    .then(response => response.json())
                    .then (data => data)
                )
            })
        )

        .then(data => this.setState({
            arrayFavs: data
        }))

        .catch(err => console.log(err))

        }

    }

    render () {
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
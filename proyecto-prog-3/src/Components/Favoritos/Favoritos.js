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
        let traigoFavs = localStorage.getItem("favoritos")
       
        if(traigoFavs !==null){
            
        let parseado = JSON.parse(traigoFavs) 

        Promise.all(
            parseado.map(Element => {
                return(
                    fetch()
                    .then(response => response.json())
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
                    {this.state.dataPeliculas.map((unPelicula, idx )=> <PeliculaCard key={unPelicula + idx} data={unPelicula}  image={unPelicula.poster_path} title={unPelicula.title}/>)}
                </section>

            <h2>Tus series favoritas</h2>

            <section className='card-container'>
                  {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries+ idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name}/>)}
            </section>

        </React.Fragment>
        );
    };

}

export default Favoritos;
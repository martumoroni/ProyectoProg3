import React, { Component } from "react";
import PeliculaCard from "../PeliculaCard/PeliculaCard";
import './Favoritos.css'


class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props : props
        }
    };

    componentDidMount(){
        let agarroFavs = localStorage.getItem("favoritos")

        if(agarroFavs !==null){
            let fav = JSON.parse(agarroFavs) //convierto JSON para que retorne el array que traigo del localStorage
            let favs = []

        fav.forEach((id) => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=af93cf6a36d0e3597028097290f9535d`)
            .then(response => response.json())
            .then(data => {
                favs.push(data)

                this.setState({
                    favs: favs,
                    loader: false
                })
            })

        .catch(err => console.log(err))
            
        });

        }
    }

    render () {
        return (
        <React.Fragment>
             <h2>Tus Favoritos</h2>
             <section className="containerFavs">
             {this.state.favs.map((favs, idx) => 
             
             <PeliculaCard 
             key= {favs.title + idx} 
             info= {favs} />)
            }
             </section>
        </React.Fragment>
        );
    };

}

export default Favoritos;
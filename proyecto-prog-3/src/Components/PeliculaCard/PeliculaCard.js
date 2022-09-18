import React, { Component } from "react";
import "./PeliculaCard.css"
import "../Main/Main.css"
import { Link } from "react-router-dom";

class PeliculaCard extends Component {
    constructor(props) {
        super(props);
        console.log('pedazo', props)
        this.state = {
            value: '',
            descripcion: '',
            verMas: 'verMas',   
            estadoFavoritos: 'Agregar a favoritos'       
        }
      
    }
    click() {
        if (this.state.verMas === 'verMas') {
            this.setState({
                verMas: 'verMenos'
            })}
        else  (this.setState({
            verMas: 'verMas'
        }))   
}

    agregarYQuitarFavoritos(idx){

        let traigoStorage = []

        let Storage = localStorage.getItem('favoritosPeliculas')
        
        if(Storage !== null){
           
            traigoStorage = JSON.parse(Storage)
        } 


        if(traigoStorage.includes(idx)){
            traigoStorage = traigoStorage.filter( id => id !== idx )
            this.setState({
                estadoFavoritos: "Agregar a favoritos"
            })
        }
        else {
            traigoStorage.push(idx)

            this.setState({
                estadoFavoritos: "Quitar de favoritos"
            })
        }

        let guardoFavoritos = JSON.stringify(traigoStorage)

        localStorage.setItem('favoritosPeliculas', guardoFavoritos)

    }

    render() {
        return (

            <article className='card-container-hijo'>
               
               <Link to={`detallepelicula/${this.props.data.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></Link>
                <h2>{this.props.title}</h2>
                <div className={this.state.verMas}>
                    <h2 className='vermas'> {this.props.data.overview} </h2>
                    <h2>{this.props.data.status} </h2>
                </div>
               
                <button className='more' onClick={()=>this.click()}>{this.state.verMas} </button>

                <button onClick={() => this.agregarYQuitarFavoritos(this.props.data.id)}>{this.state.estadoFavoritos}</button>

            </article>

        )
    }
    
}


export default PeliculaCard;
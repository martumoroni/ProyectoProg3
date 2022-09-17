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

    agregarAFavoritos(idx){
        let traigoStorage = localStorage.getItem('favoritos')
        
        if(traigoStorage == null){
            let arrayId = [idx]

            let arrayAString = JSON.stringify(arrayId)
            localStorage.setItem('favoritos', arrayAString)
        } 
        else {
            let parsedStorage = JSON.parse(traigoStorage)
            parsedStorage.push(idx)

            let storageToString = JSON.stringify(parsedStorage)
            localStorage.setItem('favoritos', storageToString)
        }
        
        this.setState({
            favorito: true
        })


    }

    quitarDeFavoritos(idx){
    
        let traigoStorage = localStorage.getItem('favoritos')

        let storageParsed = JSON.parse(traigoStorage) 

        let filteredStorage = storageParsed.filter(elm => elm !== idx)

        let storageToString = JSON.stringify(filteredStorage)
        localStorage.setItem('favoritos', storageToString)

        this.setState({
            favorito: false
        })
    }


    render() {
        return (

            <article className='card-container-hijo'>
               
               <Link to={`detallepelicula/${this.props.data.id}`}><img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" /></Link>
                <h2>{this.props.title}</h2>
                <div className={this.state.verMas}>
                    <h2 > {this.props.data.overview} </h2>
                    <h2>{this.props.data.status} </h2>
                </div>
               
                <button className='more' onClick={()=>this.click()}>{this.state.verMas} </button>

                <button onClick={() => this.agregarAFavoritos(this.props.id)}>Agregar a Favoritos</button>

                <button onClick={() => this.quitarDeFavoritos(this.props.id)}>Quitar de favoritos</button>

            </article>

        )
    }
    
}


export default PeliculaCard;
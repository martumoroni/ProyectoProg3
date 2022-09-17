import React, {Component} from 'react'
import SerieCard from '../SerieCard/SerieCard';


class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSeries: [],
            dataSerie: [],
}}

componentDidMount() {
        //Mejores Series

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d")
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    favorites(id){
        let favoritoArr = this.state.dataPeliculas.filter(elm => elm.id === id)
        this.setState({
          favorito: this.state.favorito.concat(favoritoArr)
        })
    
        let arrayAGuardar = JSON.stringify(this.state.favorito)
    
        localStorage.setItem('favoritos', arrayAGuardar)
    
        let recuperarStorage = localStorage.getItem('favoritos')
      }
    
      borrar(id){
        let arrayFiltrado = this.state.dataPeliculas.filter(personaje => personaje.id !== id)
        this.setState({
          dataPeliculas: arrayFiltrado
        })
      }

    render () {
        return (

            <React.Fragment> 
                <h1>Series</h1>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries + idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name} favorito={(idx)=> this.favorites(idx)}/>)}
                </section>
<section>

</section>
        </React.Fragment> 
        );
    };

}

export default Series;
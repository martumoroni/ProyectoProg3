import React, {Component} from "react";
import SerieCard from "../SerieCard/SerieCard";


class VerTodasSeries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 1,
            dataSeries: []
        }
    }

    componentDidMount() {

        fetch("https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d")
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results,
                  contador: this.state.contador + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }

    buscarMas() {
        
        fetch("https://api.themoviedb.org/3/tv/popular?api_key=af93cf6a36d0e3597028097290f9535d&page=" + this.state.contador)
            .then(response => response.json())
            .then(data => this.setState(
                { dataSeries: data.results,
                  contador: this.state.contador + 1
                }
            ))
            .catch(error => console.log('el error fue ' + error))
    }
    render(){
        return(

            <React.Fragment> 

                <div className="titulo-container">
                    <h2 className="Titulo">Todas las series</h2>
                    <button onClick={() => this.buscarMas()}></button>
                </div>
                <section className='card-container'>
                    {this.state.dataSeries.map((unSeries, idx )=> <SerieCard key={unSeries + idx} data={unSeries}  image={unSeries.poster_path} title={unSeries.name}/>)}
                </section>

            </React.Fragment>


        )
    }
}
export default VerTodasSeries ;
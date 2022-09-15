import React, { Component } from "react";
import Buscador from '../../Components/Buscador/Buscador'
import CardDetallePelicula from '../../Components/CardDetallePelicula/CardDetallePelicula'


class DetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            id: Number(props.match.params.id),
        }
    }

    componentDidMount() {
     /*  const url = window.location.href
       console.log(url, 'la url padre')
       const lastSegment = url.split("/").pop();
console.log(lastSegment, 'barro') */

        //Mejores Peliculas
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=c037da6882c3b5641c3425b1e80847bb`)
            .then(response => response.json())
            .then(data => {
                this.setState({ data: data })
                console.log(data, 'la informacion', this.state.data)
            }
                
    
            )
            .catch(error => console.log('el error fue ' + error))

        }
    render(){
        return(

            <React.Fragment> 
                <Buscador/>
                <div>
                {this.state.data ?
                <div>
                <CardDetallePelicula titulo={this.state.data.title} image={this.state.data.poster_path}/>
                

                </div> : <div> Cargando...</div>}
                {console.log('renderizado!', this.state.data)}

                </div>
            </React.Fragment>
        )
    }
}
export default DetallePelicula ;


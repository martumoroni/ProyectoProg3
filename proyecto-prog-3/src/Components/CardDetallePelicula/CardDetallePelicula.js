import React, { Component } from "react";


class CardDetallePelicula extends Component {
    constructor(props) {
        super(props);
        this.state = {
                
        }
        console.log(props)
    }
 


    render() {
        return (

            <article className='card-container-hijo'>
              <img src={`https://image.tmdb.org/t/p/w342/${this.props.image}`} alt="" />
                <h2>{this.props.title}</h2>
                <div className={this.state.verMas}>
                    <h1>{this.props.title} </h1>
                </div>
                
            </article>

        )
    }
    
}


export default CardDetallePelicula;
import React, { Component } from "react";
import './Favoritos.css'


class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            props : props
        }
    };

    render () {
        return (
        <React.Fragment>
             <p>Hola</p>
        </React.Fragment>
        );
    };

}


export default Favoritos;
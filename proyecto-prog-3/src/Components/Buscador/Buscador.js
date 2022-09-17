import React, {Component} from 'react'
import "./Buscador.css"


class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput: '',
            resultados: [], 
        }
    }

    prevenirRefresch(event){
        event.preventDefault()
    }
    
    controlarCambiosdelInput(event){
           this.setState({
            valorInput: event.target.value},
            ()=> this.props.filtrar(this.state.valorInput)
        )}

    render(){
        return( 
            <form className='buscador' onSubmit={event => this.prevenirRefresch(event)}>
                <input onChange={(event=> this.controlarCambiosdelInput(event))} value={this.state.valorInput} />

            </form>
          ) } }

export default Buscador
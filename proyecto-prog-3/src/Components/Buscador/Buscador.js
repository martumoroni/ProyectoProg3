
import React, {Component} from 'react'

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput: '',
            resultados: [],
        }
    }
    prevenirRefresch(event){
        event.prevenirRefresch()
    }
    controlarCambiosdelInput(event){
        this.setState({
            valorInput: event.target.value
        }, ()=> this.props.metodoQueBusca
        )}
    render(){
        return( 
            <form onSubmit={event => this.prevenirRefresch(event)}>
                <input onChange={(event=> this.controlarCambiosdelInput(event))} value={this.state.valorInput} />

            </form>
          ) } }

export default Buscador
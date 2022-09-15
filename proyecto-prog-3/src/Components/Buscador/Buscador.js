
import React, {Component} from 'react'

class Buscador extends Component{
    constructor(props){
        super(props)
        this.state = {
            valorInput: '',
            resultados: [], 
        }
    }
    otroMetodo(){
        console.log('otro metodo')
      }
    prevenirRefresch(event){
        event.preventDefault()
    }
    controlarCambiosdelInput(event){
     if (event.target.id === 'inputSearch') {
           this.setState({
            valorInput: event.target.value},
             ()=> this.props.metodoQueBusca(this.state.valorInput, this.state.valorInput)
        )}} 
    render(){
        return( 
            <form onSubmit={event => this.prevenirRefresch(event)}>
                <input onChange={(event=> this.controlarCambiosdelInput(event))} value={this.state.valorInput} />
            
            <button type='submit'>Submit</button>
            </form>
          ) } }

export default Buscador
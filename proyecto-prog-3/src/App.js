import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Peliculas from './Components/Peliculas/Peliculas'
import Favoritos from './Components/Favoritos/Favoritos'
import VerTodasPeli from './Components/VerTodasPeli/VerTodasPeli'
import VerTodasSerie from "./Components/VerTodasSerie/VerTodasSerie"
import { Route, Switch } from "react-router-dom";
import Series from './Components/Series/Series';
import DetallePelicula from './Screens/DetallePelicula/DetallePelicula';
import PeliculaCard from './Components/PeliculaCard/PeliculaCard';

/* import PeliculaCard from './Components/PeliculaCard/PeliculaCard';
import SerieCard from './Components/SerieCard/SerieCard' */

function App() {
return(
  <React.Fragment>
    <Header/>
      <Switch>
        <Route path='/' exact component={ Main}/>
        <Route path='/Favoritos' component={ Favoritos }/>
        <Route path='/Peliculas' component={ Peliculas }/>
        <Route path='/ver-todaSerie'  component={VerTodasSerie}/> 
        <Route path='/ver-todasPeli' component={VerTodasPeli}/>
        <Route path='/Series' component={Series}/>
        <Route path='/detallepelicula/:id' component={DetallePelicula}/>

        
      </Switch>
    
    <Footer/>
  
  </React.Fragment>
)


}
export default App;
import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Peliculas from './Components/Peliculas/Peliculas'
import Favoritos from './Components/Favoritos/Favoritos'
import VerTodas from './Components/VerTodas/VerTodas'
import { Route, Switch } from "react-router-dom";
import Series from './Components/Series/Series';
import DetallePelicula from './Screens/DetallePelicula/DetallePelicula';
import DetalleSerie from './Screens/DetalleSerie/DetalleSerie';
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
        <Route path='/ver-todas' component={VerTodas}/>
        <Route path='/Series' component={Series}/>
        <Route path='/detallepelicula/:id' component={DetallePelicula}/>
        <Route path='/detalleserie/:id' component={DetalleSerie}/>



        
      </Switch>
    
    <Footer/>
  
  </React.Fragment>
)


}
export default App;
import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import Peliculas from './Components/Peliculas/Peliculas'
import Favoritos from './Components/Favoritos/Favoritos'
import VerTodos from './Components/VerTodos/VerTodos'
import { Route, Switch } from "react-router-dom";


/*import PeliculaCard from './Components/PeliculaCard/PeliculaCard';
import SerieCard from './Components/SerieCard/SerieCard'*/

function App() {
return(
  <React.Fragment>
    <Header/>
      <Switch>
        <Route path='/' exact component={ Main}/>
        <Route path='/Favoritos' component={ Favoritos }/>
        <Route path='/Peliculas' component={ Peliculas }/>
        <Route path='/ver-todos'  component={ VerTodos }/>
      </Switch>
    
    <Footer/>
  
  </React.Fragment>
)


}
export default App;
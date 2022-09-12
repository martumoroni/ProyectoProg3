import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import {Route, Switch } from "react-router-dom";
import DetallePelicula from './Components/DetallePelicula/DetallePelicula';


/*import PeliculaCard from './Components/PeliculaCard/PeliculaCard';
import SerieCard from './Components/SerieCard/SerieCard'*/

function App() {
return(
  <React.Fragment>

    <Header/>
    <Switch>
 <Route path='/' exact={true}  component={Main} />
 <Route path='/DetallePelicula' component={DetallePelicula}/>
 </Switch>
    <Footer/>
  
  </React.Fragment>
)


}
export default App;
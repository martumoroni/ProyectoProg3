import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
//import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";


import PeliculaCard from './Components/PeliculaCard/PeliculaCard';
import SerieCard from './Components/SerieCard/SerieCard';

function App() {
/* return(
  <React.Fragment>
    <Header/>
<Main/>
<Routes>
<Route path = '/' exact = {true} component={Main}/>
</Routes>


  </React.Fragment>
) */

return(
  <React.Fragment>

    <Header/>
    <Main/>
  </React.Fragment>
)


}
export default App;
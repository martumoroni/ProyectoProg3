import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header(props) {
    
    return (    
        <header className="header">  
        <div><img className='imovieslogo' src='../img/imovies.jpeg' alt="imovie"/>
                <Link to='/'>Main</Link>
        </div>
            <div className='headerlista'>
            <Link to='/favoritos'>Favoritos</Link>
            <Link to='/peliculas'>Peliculas</Link>
            <Link to='/ver-todos'>Ver todos</Link>
            </div>
        </header>

    );
}


export default Header;

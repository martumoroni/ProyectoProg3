import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header(props) {
    
    return (
        <header className="header">
        <div className='maineimagen'>
                <img className='imovieslogo' src='../img/logodos.png' alt="imovie" />
                <Link className='headerTitulo' to='/'>IMOVIES</Link>

        </div>
                <div>
            <ul className='headerLista'>
            <li><Link className='headerlista' to='/favoritos'>Favoritos</Link></li>
            <li><Link className='headerlista' to='/peliculas'>Peliculas</Link></li>
            <li><Link className='headerlista' to='/Series'>Series</Link></li>
            <li><Link className='headerlista' to='/ver-todas'>Ver todos</Link></li>
            </ul>
                </div>

        </header>

    );
}


export default Header;

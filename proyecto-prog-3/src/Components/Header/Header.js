import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';

function Header(props) {
    
    return (
        <header className="header">
        <div className='maineimagen'>
                <img className='imovieslogo' src='../img/logodos.png' alt="imovie" />
                <Link to='/'>Main</Link>

        </div>
                <div>
            <ul className="headerlista">
            <li><Link to='/favoritos'>Favoritos</Link></li>
            <li> <Link to='/peliculas'>Peliculas</Link></li>
            <li><Link to='/Series'>Series</Link></li>
            <li><Link to='/ver-todas'>Ver todos</Link></li>
            </ul>
                </div>

        </header>

    );
}


export default Header;

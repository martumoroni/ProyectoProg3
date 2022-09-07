import React from 'react'
import './Footer.css'

function Footer() {
    return (
        
        <footer className="footer">  
            <div>
            <img className='digitahouselogo' src='../img/digitalhouselogo.png' alt="digitalhouse"/>
            <ul className="nombresequipo">
                    <li>Tomás de Trápaga</li>
                    <li>Franco Ferrero</li>
                    <li>Martina Moroni</li>
            </ul>
            <img className='udesalogo' src='../img/udesalogo.png' alt="udesalogo"/>
            </div>
        </footer>

    );
}

export default Footer;
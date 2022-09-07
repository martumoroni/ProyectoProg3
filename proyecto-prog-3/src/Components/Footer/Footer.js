import React from 'react'
import './Footer.css'

function Footer() {
    return (
        
        <footer className="footer">  
        
            <div><img className='digitahouselogo' src='../img/digitalhouselogo.jpg' alt="digitalhouse"/></div>
            <div>
            <ul className="nombresequipo">
                    <li>Tomás de Trápaga</li>
                    <li>Franco Ferrero</li>
                    <li>Martina Moroni</li>
            </ul>
            </div>
            <div><img className='udesalogo' src='../img/udesalogo.png' alt="udesalogo"/></div>            
        </footer>

    );
}

export default Footer;
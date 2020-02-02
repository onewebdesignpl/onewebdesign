import React from 'react';
import { Link } from 'gatsby';
import '../css/header.css';


const Header = () => {
    return ( 
        <>
           <header>
                
                <div className="header-content">
                    <h1>Projektowanie i tworzenie stron internetowych.</h1>
                    <div className="blue-bar"></div>
                    <h2>Stwórz swoje własne miejsce w sieci.</h2>
                    <div className="call-to-action">
                    <Link to={'/kontakt'}>NAPISZ DO MNIE<div className="white-circle"><div class="blue-circle"></div></div></Link></div>
                </div>

           </header>
        </>
     );
}
 
export default Header;
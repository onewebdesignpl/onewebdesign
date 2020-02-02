import React from 'react';
import { Link } from 'gatsby';
import '../css/navigation.css';
import menuTrigger from '../images/mobile-menu-trigger.png';
import logo from '../images/Logo.png';
import miniLogo from '../images/Logo-mini.png';
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css';




const openMenu = () => {
    const ul = document.querySelector('ul');
    ul.classList.toggle('active');
}

const closeMenu = () => {
    const ul = document.querySelector('ul');
    ul.classList.remove('active');
}




if (typeof window !== `undefined`) {
    window.addEventListener('scroll', (e) => {
        let scrollPosition = e.target.scrollingElement.scrollTop;
        const nav = document.querySelector('nav');
        const img = document.querySelector('.logo');
        if (scrollPosition > 0) {
            nav.classList.add('active');
            img.src = miniLogo;
        } else {
            nav.classList.remove('active');
            img.src = logo;
        }
    })
  }

const Navigation = () => { 

    return ( 
        <>
            <nav>
                <Link to={'/'}><div className="logo-box"><img className="logo" alt="logo" src={logo}/></div></Link>
                <div onClick={openMenu} className="menu-trigger-box"><img className="mobile-menu-trigger" alt="mobile-menu" src={menuTrigger}/></div>
                <ul>
                    <li onClick={closeMenu}><Link className="hovered" to={'/'}>Start</Link></li>
                    <li onClick={closeMenu}><Link className="hovered" to={'/strony-internetowe'}>Oferta</Link></li>
                    {/* <li onClick={closeMenu}><Link to={'/realizacja'}>Realizacja</Link></li> */}
                    <li onClick={closeMenu}><Link className="hovered" to={'/o-mnie'}>O mnie</Link></li>
                    <li onClick={closeMenu} className="contact-btn"><Link to={'/kontakt'}>Kontakt</Link></li>
                    <h3>Dołącz do mnie w social media</h3>
                    <div className="socials">
                        <a href="https://www.facebook.com/owdesignpl" target="_blank"><i className="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.linkedin.com/in/slawomir-andrzejewski" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                </ul> 
            </nav>
        </>
     );
}
 
export default Navigation;
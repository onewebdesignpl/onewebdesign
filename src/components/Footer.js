import React from 'react';
import '../css/footer.css';
import mapIcon from '../images/icon-map.png';

const Footer = () => {
    return ( 
        <>
            <footer>
                <div className="footer-wrap">
                    <div className="footer-box">
                        <h2>kontakt@onewebdesign.pl</h2>
                        <p>Masz nowy, świetny pomysł którym chcesz się podzielić? Napisz do mnie, umówmy się na kawę, porozmawiajmy.</p>
                    </div>
                    <div className="footer-box">
                        <h2>Dołącz do mnie w social media</h2>
                        <div className="socials">
                            <a href="https://www.facebook.pl/owdesignpl" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/slawomir-andrzejewski" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="footer-box">
                        <h2>One Web. Design dzieła w całej Polsce!</h2>
                        <div><img src={mapIcon} alt='map icon'/></div>
                    </div>
                </div>
            </footer>
            <div className="footy">© 2019 One Web. Design. All rights reserved.</div>
        </>
     );
}
 
export default Footer;
import React from 'react';
import { Link } from 'gatsby';
import '../css/offer.css';
import iconwww from '../images/icon-www.png';
import iconcart from '../images/icon-shopcart.png';
import icontypewriter from '../images/icon-typewriter.png';

const Offer = () => {
    return ( 
        <>
            <section id="oferta" className="offer">
                <div className="offer-box">
                    <div><Link to={'/strony-internetowe'}><img src={iconwww}></img></Link></div>
                    <h1>Strony www</h1>
                    <p>Czy potrzebujesz się wyróżniać w internecie? Pewnie, że tak! Aby Twoja marka stała się rozpoznawalna musisz stać się widoczny w sieci.</p>
                    <Link to={'/strony-internetowe'}><button>Zobacz więcej</button></Link>
                    <div className="orange-bar"></div>
                </div>
                <div className="offer-box">
                    <div><Link to={'/sklepy-internetowe'}><img src={iconcart}></img></Link></div>
                    <h1>Sklepy internetowe</h1>
                    <p>Masz świetny pomysł na nowy biznes? Nowoczesny sklep ecommerce oparty o instuicyjny CMS. To wybór właśnie dla Ciebie. </p>
                    <Link to={'/sklepy-internetowe'}><button>Zobacz więcej</button></Link>
                    <div className="orange-bar"></div>
                </div>
                <div className="offer-box">
                    <div><Link to={'/copywriting'}><img src={icontypewriter}></img></Link></div>
                    <h1>Copywriting</h1>
                    <p>Masz już swoją stronę lub sklep internetowy ale potrzebujesz zamieścić profesjonalnie przygotowane treści? Pomogę Ci. </p>
                    <Link to={'/copywriting'}><button>Zobacz więcej</button></Link>
                    <div className="orange-bar"></div>
                </div>
            </section>
        </>
     );
}
 
export default Offer;
import React from 'react';
import '../css/main.css';
import { Link } from 'gatsby';
import iconwww1 from '../images/oferta-icon-www.png';
import iconwww2 from '../images/mobile-devices-icon.png';

const MainSites = () => {
    return ( 
        <>
          <main className="offer-page">
              <section>
                  <div className="offer-box">
                      <h2>Nowoczesne, sprawdzone rozwiązania</h2>
                      <p>Przy realizacji wszystkich moich projektów stosuję najnowsze, obowiązujące obecnie standardy i dobre praktyki. Moje prace oparte są o sprawdzone rozwiązania, które pomogą Ci osiągnąć zamierzony cel.</p>
                  </div>
                  <div className="offer-box flex-image-center">
                      <img src={iconwww1} />
                  </div>
              </section>
              <section id="gray-section">
                  <div className="offer-box">
                      <h2>Responsywność</h2>
                      <p>Moje strony są responsywne, czyli dostosowane są dla każdego urządzenia. Niezależnie od wielkości ekranu. Obecnie blisko połowa wejść na stronę pochodzi z urządzeń mobilnych, dlatego tak ważnym jest aby zapewnić komfort przeglądania treści niezależnie od urządzenia.</p>
                  </div>
                  <div className="offer-box flex-image-center">
                      <img src={iconwww2} />
                  </div>
              </section>
              <section>
                  <div className="offer-box">
                      <h2>Unikalny projekt</h2>
                      <p>Moje strony są niepowtarzalne, zaprojektowane od podstaw według unikalnego projektu, który stworzymy wspólnie. Dopasowana do Ciebie, do Twoich potrzeb i do potrzeb Twoich klientów.</p>
                  </div>
                  <div className="offer-box">
                      <h2>Ile to kosztuje?</h2>
                      <p>Każdy projekt wyceniam indywidualnie, biorę pod uwagę poziom skomplikowania i czas potrzebny na realizację projektu. <br/><br/>Skontaktuj się ze mną w celu wyceny.</p>
                      <Link to="/kontakt" ><button>kontakt</button></Link>
                      <p className="paragraph-12">Ceny prostych stron typu OnePage (wizytówka) zaczynają się już od 499zł. </p>
                  </div>
              </section>
          </main>
        </> 
    );
}
 
export default MainSites;
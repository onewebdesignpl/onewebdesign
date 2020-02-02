import React from 'react';
import '../css/main.css';
import { Link } from 'gatsby';
import iconwww1 from '../images/oferta-icon-shops.svg';
import iconwww2 from '../images/Woocommerce.png';

const MainShops = () => {
    return ( 
        <>
          <main className="offer-page">
              <section>
                  <div className="offer-box">
                      <h2>Funkcjonalność i łatwość obsługi</h2>
                      <p>Sklepy, które realizuję charakteryzują się prostą ścieżką konwersji, która ma przyczynić się do jak największej liczby zamówień. Droga, którą musi pokonać Twój klient od momentu wyboru towaru do chwili zapłaty musi być szybka, sprawna i przyjemna.</p>
                  </div>
                  <div className="offer-box flex-image-center">
                      <img src={iconwww1} />
                  </div>
              </section>
              <section id="gray-section">
                  <div className="offer-box">
                      <h2>Łatwy w zarządzaniu panel administracyjny</h2>
                      <p>Sklepy, które tworzę oparte są o sprawdzone rozwiązania, które wykorzystywane są na całym świecie. Prosty i przejrzysty panel administracyjny zapewnia łatwe i skuteczne zarządzanie produktami oraz sprzedażą. </p>
                  </div>
                  <div className="offer-box flex-image-center">
                      <img src={iconwww2} />
                  </div>
              </section>
              <section>
                  <div className="offer-box">
                      <h2>Dodatkowe korzyści</h2>
                      <p>Wybierając współpracę ze mną otrzymujesz dodatkowe, wybrane integracje Twojego sklepu z innymi serwisami. Oferuję wyposażenie Twojej witryny w dodatkowy moduł szybkich płatności online, integracje z firmami kurierskimi a także serwisami aukcyjnymi.</p>
                  </div>
                  <div className="offer-box">
                      <h2>Ile to kosztuje?</h2>
                      <p>Każdy projekt wyceniam indywidualnie, biorę pod uwagę poziom skomplikowania i czas potrzebny na realizację projektu. <br/><br/>Skontaktuj się ze mną w celu wyceny.</p>
                      <Link to="/kontakt" ><button>kontakt</button></Link>
                      <p className="paragraph-12">Ceny sklepów internetowych zaczynają się już od 999zł. </p>
                  </div>
              </section>
          </main>
        </> 
    );
}
 
export default MainShops;
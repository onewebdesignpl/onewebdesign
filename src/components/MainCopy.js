import React from 'react';
import '../css/main.css';
import iconwww1 from '../images/oferta-icon-ui.png';
import iconwww2 from '../images/icon-content.png';

const MainCopy= () => {
    return ( 
        <>
            <main className="offer-page">
              <section>
                  <div className="offer-box">
                      <h2>Unikalne treści, stworzone z myślą o Tobie</h2>
                      <p>Dobór odpowiednio przygotowanego stylistycznie tekstu na Twojej stronie internetowej ma kluczowe znaczenie aby użytkownik poczuł więź z Twoją marką i chętnie do niej powracał. Ważny jest również dobór odpowiednich słów kluczowych, które pozwolą na uzyskanie lepszej pozycji w wynikach wyszukiwania Google.</p>
                  </div>
                  <div className="offer-box flex-image-center">
                      <img src={iconwww1} />
                  </div>
              </section>
              <section id="gray-section">
                  <div className="offer-box">
                      <p>Zapewniam Ci pełny wgląd do materiału oraz możliwość korygowania każdej jego części. 
Treści, które dla Ciebie przygotuję poprzedzone są dogłębną analizą tematu i rynku na którym się znajduje. Każdy tworzony przeze mnie artykuł jest unikalny, dopasowany konkretnie do Twoich potrzeb. </p>
                  </div>
                  <div className="offer-box flex-image-center">
                  <img src={iconwww2} />
                  </div>
              </section>
          </main>
        </>
     );
}
 
export default MainCopy;
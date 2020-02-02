import React from 'react';
import '../css/main.css';
import iconwww1 from '../images/image-about-me.jpg';

const MainShops = () => {
    return ( 
        <>
          <main className="offer-page">
              <section>
                  <div className="offer-box">
                      <h2>Cześć, mam na imię Sławek. Poznajmy się trochę lepiej.</h2>
                      <h3>Zajmuję się tworzeniem nowoczesnych, dynamicznych stron internetowych dla małych firm i osób prywatnych. Obecnie moja oferta opiera się na trzech segmentach:</h3>
                      <p><i class="fas fa-check"></i>Responsywne strony internetowe</p>
                      <p><i class="fas fa-check"></i>Sklepy e -commerce</p>
                      <p><i class="fas fa-check"></i>Copywriting</p>
                  </div>
                  <div className="offer-box flex-image-center">
                      <img src={iconwww1} />
                  </div>
              </section>
          </main>
        </> 
    );
}
 
export default MainShops;
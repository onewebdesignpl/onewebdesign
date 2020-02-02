import React from 'react';
import '../css/realization.css';
import iconUnderContruction from '../images/under-construction-icon.png';

const Realization = () => {
    return ( 
        <>
            <section className="realization">
                <div className="realization-box">
                    <h3>Onewebdesign zapewnia indywidualne podejście do każdego klienta. Moja praca jest ukierunkowana na Twój sukces.</h3>
                    <p>Moje usługi są kompleksowe. Począwszy od skonfigurowania Twojej nowej domeny, przez proces projektowania zorientowanego na użytkownika, aż po finalne zamieszczenie Twojej strony na serwerze.</p>
                    {/* <p>Zastanawiasz się jak przebiega proces tworzenia Twojej witryny?</p>
                    <button>Realizacja</button> */}
                </div>
                <div className="realization-box">
                    <div><img src={iconUnderContruction} /></div>
                </div>
            </section>
        </>
     );
}
 
export default Realization;
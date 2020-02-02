import React from 'react';
import '../css/contact.css';
import Form from '../components/Form';

const Contact = () => {
    return ( 
        <>
            <section className="contact">
                <div className="contact-wrapper">
                    <div className="contact-box blue-box">
                        <h3>ZADZWOŃ</h3>
                        <div className="orange-bar"></div>
                        <h1>+48 731 085 622</h1>
                        <h3>lub NAPISZ</h3>
                        <div className="orange-bar"></div>
                        <h1><a href="mailto:kontakt@onewebdesign.pl">kontakt@onewebdesign.pl</a></h1>
                        <h1><a href="https://www.facebook.pl/owdesignpl" target="_blank">facebook.pl/owdesignpl</a></h1>
                    </div>
                    <div className="contact-box form">
                        < Form />
                    </div>
                </div>
            </section>
        </> 
     );
}
 
export default Contact; 
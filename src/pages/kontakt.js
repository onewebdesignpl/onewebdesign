import React from 'react';
import Navigation from '../components/Navigation';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

const ContactPage = () => {
    return ( 
        <>
        <Helmet>
            <title>OneWeb Design • strony internetowe Ciechanów</title>
            <meta name="description" content="Projektowanie i tworzenie stron internetowych Ciechanów. Strony www, sklepy internetowe, copywriting • OneWeb Design" /> 
        </Helmet>
        <Navigation />
        <Contact />
        <Footer />
        </>
     );
}
 
export default ContactPage; 
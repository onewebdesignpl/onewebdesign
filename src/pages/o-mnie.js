import React from 'react';
import Navigation from '../components/Navigation';
import SubHeader from '../components/SubHeader';
import MainAboutMe from '../components/MainAboutMe';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";

const AboutMe = () => {
    return ( 
        <>
        <Helmet>
            <title>OneWeb Design • strony internetowe Ciechanów</title>
            <meta name="description" content="Projektowanie i tworzenie stron internetowych Ciechanów. Strony www, sklepy internetowe, copywriting • OneWeb Design" /> 
        </Helmet>
        <Navigation />
        <SubHeader />
        <MainAboutMe />
        <Footer />
        </>
     );
}
 
export default AboutMe;
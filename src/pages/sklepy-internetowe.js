import React from 'react';
import Navigation from '../components/Navigation';
import SubHeader from '../components/SubHeader';
import SubMenu from '../components/SubMenu';
import Footer from '../components/Footer';
import MainShops from '../components/MainShops';
import { Helmet } from "react-helmet";

const sklepyInternetowe = () => {
    return ( 
        <>
        <Helmet>
            <title>OneWeb Design • strony internetowe Ciechanów</title>
            <meta name="description" content="Projektowanie i tworzenie stron internetowych Ciechanów. Strony www, sklepy internetowe, copywriting • OneWeb Design" /> 
        </Helmet>
        < Navigation />
        < SubHeader />
        < SubMenu />
        < MainShops />
        < Footer />
        </>

     );
}
 
export default sklepyInternetowe;
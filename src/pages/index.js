import React from "react";
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Offer from '../components/Offer';
import Realization from '../components/Realization';
import Footer from '../components/Footer';
import { Helmet } from "react-helmet";
import '../css/index.css';


const IndexPage = () => (
  <>
    <Helmet>
        <title>OneWeb Design • strony internetowe Ciechanów</title>
        <meta name="description" content="Projektowanie i tworzenie stron internetowych Ciechanów. Strony www, sklepy internetowe, copywriting • OneWeb Design" /> 
    </Helmet>
    <Navigation />
    <Header />
    <Offer />
    <Realization />
    <Footer />
  </> 
)
  


export default IndexPage

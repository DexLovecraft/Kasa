import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'

import Header from './components/header';
import Banner from './components/banner';
// import Thumbnail from './components/thumbnail';
import Gallery from './components/gallery';
import Footer from './components/footer';

import home__banner from './img/home__banner.png'
// import about__banner from './img/about__banner.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Header />
    <Banner img={home__banner} text={'Chez vous, partout et ailleurs'}/>
    {/* <Banner img={about__banner} text={''}/> Banner pour la page a propos*/}
    {/* <Thumbnail img={home__banner} name="Maison des lilas" id="021522"/> */}
    <Gallery />
    <Footer/>
  </React.Fragment>
);
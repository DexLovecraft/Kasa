import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'

import Header from './components/header';
import Banner from './components/banner';
// import Gallery from './components/gallery';
import Footer from './components/footer';
import CollapseAbout from './components/collapseAbout';
// import Error404 from './components/error404';

// import home__banner from './img/home__banner.png'
import about__banner from './img/about__banner.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Header />
    {/* <Banner img={home__banner} text={'Chez vous, partout et ailleurs'}/> */}
    <Banner img={about__banner} text={''}/>
    <CollapseAbout/>
    {/* <Gallery /> */}
    {/* <Error404 /> */}
    <Footer/>
  </React.Fragment>
);
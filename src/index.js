import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'

import Header from './components/Shared/header';
import Footer from './components/Shared/footer';
import Banner from './components/Shared/banner';
import Gallery from './components/Home/gallery';
// import CollapseAbout from './components/About/collapseAbout';
// import House from './components/House/house';
// import Error404 from './components/error404';

// import house from './datas/logements.json'
import home__banner from './img/home__banner.png'
// import about__banner from './img/about__banner.png'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <React.StrictMode>
        <Router>
          <Header /> 
            <Routes>
                <Route path="/" element={
                  <React.Fragment>
                    <Banner img={home__banner} text={'Chez vous, partout et ailleurs'}/>
                    <Gallery />
                  </React.Fragment>
                 } />
            </Routes>
            <Footer/>
        </Router>
    </React.StrictMode>,
    
    {/* <Banner img={about__banner} text={''}/>
    <CollapseAbout/> */}
    {/* <House house={house[2]}/> */}
    {/* <Error404 /> */}
    
  </React.Fragment>
);
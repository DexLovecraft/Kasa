import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.css'

import Header from './components/Shared/header';
import Footer from './components/Shared/footer';
import Banner from './components/Shared/banner';
import Gallery from './components/Home/gallery';
import CollapseAbout from './components/About/collapseAbout';
import House from './components/House/house';
import Error404 from './components/error404';

import house from './datas/logements.json'
import home__banner from './img/home__banner.png'
import about__banner from './img/about__banner.png'

const root = ReactDOM.createRoot(document.getElementById('root'));


function App () {
  const [whichHouse , updateWhichHouse] = useState('c67ab8a7')
  const [selection, changeSelection] = useState('accueil')

  return (
    <React.Fragment>
      <React.StrictMode>
          <Router>
            <Header selection={selection} changeSelection={changeSelection}/> 
              <Routes>
                  <Route path="/" element={
                    <React.Fragment>
                      <Banner img={home__banner} text={'Chez vous, partout et ailleurs'}/>
                      <Gallery whichHouse={whichHouse} updateWhichHouse={updateWhichHouse}/>
                    </React.Fragment>
                   } />
                   <Route path="/about" element={
                    <React.Fragment>
                      <Banner img={about__banner} text={''}/>
                      <CollapseAbout/>
                    </React.Fragment>
                   } />
                   <Route path="/house" element={
                      <House changeSelection={changeSelection} house={house.find(obj => {
                        return obj.id === whichHouse
                      })}/>
                   } />
                   <Route path="*" element={
                      <Error404 changeSelection={changeSelection} /> 
                   } />
              </Routes>
              <Footer/>
          </Router>
      </React.StrictMode>,
      
      {/*  */}
      {/*  */}
      
    </React.Fragment>
  )
}

root.render(
  <App />
)

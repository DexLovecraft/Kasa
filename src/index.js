import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './styles/index.css'

import Header from './components/Shared/header';
import Footer from './components/Shared/footer';
import Home from './pages/home'
import About from './pages/about';
import House from './pages/house';
import Error404 from './pages/error404';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/house/:id" element={<House />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
    </Router>
)

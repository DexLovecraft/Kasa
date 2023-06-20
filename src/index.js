import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'

import Header from './components/header';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Header />
  </React.Fragment>
);
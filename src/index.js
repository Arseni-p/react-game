import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import PagesComponents from './js/pages/PagesComponents';
import updateCurrLink from './js/pages/updateCurrLink';
import Preloader from './js/pages/Preloader';

document.addEventListener("DOMContentLoaded", function(event) {
  console.log("DOM fully loaded and parsed");
});

ReactDOM.render(
  <React.StrictMode>
    <Preloader />
    <PagesComponents />
  </React.StrictMode>,
  document.getElementById('root'),
);

updateCurrLink();

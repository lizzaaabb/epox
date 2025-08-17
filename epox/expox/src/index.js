import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './Landing';
import Header from './Header';
import About from './About';
import Epox2 from './Epox2';
import Candle from './Candle';
import Prices from './Prices';
import Course from './Course';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />  
    <Landing />
    <About />
    <Epox2/>
    <Candle />
    <Prices />
    <Course />


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

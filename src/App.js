import React, { Component } from 'react';
import './App.css';
import Header from './componentes/header/Header';
import Footer from './componentes/footer/Footer';
import Main from './componentes/main/Main';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

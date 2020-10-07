import React, { Component } from 'react';
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';

function App() {
  return (
    <div>
    <Header/>
    <div>
      <h3>Contatos</h3>
    <div>
      <img></img>
    </div>
   <div>
     <section>
        <form>
          <label > Name: </label>
          <input type="text" placeholder="Darth Vader"></input> 
          <label> E-mail: </label>
          <input type="text" placeholder="darthvader@hotmail.com"></input> 
          <label> Message: </label>
          <textarea placeholder="insira sua mensagem aqui"> </textarea > 
          <button>Enviar</button>      
        </form>
      </section>
    </div>
  </div>
  <Footer/>
  </div>
  );
}

export default App;

import React, { Component } from 'react';
import '../header/header.css';

class Header extends React.Component{
   render(){
     return (
      <header className="header_menu">
       <nav>
          <a>Drinks</a>
          <a>Sobre nós</a>
          <a>Bons Drinks</a>
          <a>Nosso Time</a>
          <a>Contato</a>
        </nav>
      </header>
      
    );
  }
}
export default Header;

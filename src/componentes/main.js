import React, { Component } from 'react';

import FormContato from './componentes/formContato';
import fotoContato from './image/contact-pic.jpg';

class Main extends React.Component{
    render(){
        return(
            <div>
    <div>
      <h3>Contatos</h3>
    <div>
      <img src={this.props.img}></img> {/*pegando a propriedade da imagem escolhida*/}
    </div>
        <FormContato img={fotoContato} />{/*informando a foto que quero usar*/}
        <FormContato name={"Name: "} placeholder={"Darth Vader"}/>
        <FormContato name={"E-mail: "} placeholder={"darthvader@hotmail.com"}/>
        <FormContato name={"Mensagem: "} placeholder={"insira sua mensagem aqui"}/>
    </div>
    </div>
    );
  }
}
export default Main;
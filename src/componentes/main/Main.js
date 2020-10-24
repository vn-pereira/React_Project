import React, { Component } from 'react';

import FormContato from '../FormContato/FormContato';
import fotoContato from '../../image/contact-pic.jpg';

class Main extends React.Component{
    render(){
        return(
        <div>
    <div>
      <h3>Contatos</h3>
    <div>
      <img src={fotoContato}></img> {/*pegando a propriedade da imagem escolhida*/}
    </div>

        <FormContato name={"Name: "} placeholder={"Darth Vader"}/>
        <FormContato name={"E-mail: "} placeholder={"darthvader@hotmail.com"}/>
        <FormContato name={"Mensagem: "} placeholder={"insira sua mensagem aqui"}/>
    </div>
    </div>
    );
  }
}
export default Main;
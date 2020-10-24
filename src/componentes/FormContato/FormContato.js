import React, { Component } from 'react';
import '../FormContato/formContato.css' 

class FormContato extends React.Component{
    render(){
      return(    
    
   <div className="form">
     <section>
        <form >
          <label> {this.props.name} </label>
          <input type="text" placeholder={this.props.placeholder}></input> {/*testar array of + map para renderizar o input */}
          {/*<label> E-mail: </label>
          <input type="text" placeholder="darthvader@hotmail.com"></input> 
          <label> Message: </label>
          <textarea placeholder="insira sua mensagem aqui"> </textarea > 
          <button>Enviar</button>      */}
        </form>
      </section>
    </div>
      );
    };
}
export default FormContato;
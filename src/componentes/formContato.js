import React, { Component } from 'react';

class FormContato extends React.Component{
    render(){
      return(    
    
   <div>
     <section>
        <form className="form">
          <label> {this.props.name} </label>
          <input type="text" placeholder={this.props.placeholder}></input> 
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
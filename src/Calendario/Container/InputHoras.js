import React, { Component } from 'react';
import './InputReserva.css'

export class Inputhoras extends Component {
 
    

   render() {

    const { fechaInicioReunion ,fechaFinalReunion, tituloReservaBaseDatos,  } = this.props

     
     return (
    <div className="reservaBorder">
    <h5>{`${fechaInicioReunion} - ${fechaFinalReunion}`}</h5>
    <p>{tituloReservaBaseDatos}</p>    
    </div>
     )
   }
}
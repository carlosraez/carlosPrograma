import React, { Component } from 'react';
import './InputReserva.css'


  

export class Inputhoras extends Component {
 
 divStyle() {
   const tiempo  =   parseInt(this.props.minutosTotales,10) * 3.3
     return   {
        borderWidth: 1,
        border: 'solid',
        borderColor:  '#212529',
        textAlign:'center',
        width:  170,
        borderRadius: 5,
        height: tiempo,
        position: 'absolute',
        marginLeft: -5,
        marginTop: -5,
        backgroundColor: '#17a2b8',
        fontSize: 12,
        color: '#fff'
     }
 }

   render() {

    const { fechaInicioReunion ,fechaFinalReunion, tituloReservaBaseDatos,  } = this.props

     
     return (
    <div style={this.divStyle()}>
    <h5>{`${fechaInicioReunion} - ${fechaFinalReunion}`}</h5>
    <p>{tituloReservaBaseDatos}</p>    
    </div>
     )
   }
}
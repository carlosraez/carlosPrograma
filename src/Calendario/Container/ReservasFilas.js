import React, { Component } from 'react';
import { InputReserva } from './InputReserva.js'
import './ReservasFilas.css'



export class ReservasFilas extends Component {
   hora = () => {
    const { hora, horaNoMostrar  } = this.props
      
      if(hora === horaNoMostrar )
     {
       return ''
     }
     else {
       return hora
     }
   } 
       
   render() {
     const { hora, 
      handleClickReserva , 
      semana, 
      mes, 
      year, 
      reservasFecha, 
      tituloReservaBaseDatos , 
      fechaInicioReunion ,
      minutosTotales, 
      direccionReservaBaseDatos,
      nombreReservasBaseDatos,
      recargarComponenteCalendario,
      fechaFinalReunion,
     } = this.props
     
     return (
       <tr>
         <th scope="row">{this.hora()}</th>
         {
           semana.map((dia,index) => {
             return (
              <InputReserva
              key={dia}
              recargarComponenteCalendario={recargarComponenteCalendario}
              nombreReservasBaseDatos={nombreReservasBaseDatos}
              minutosTotales={minutosTotales}
              direccionReservaBaseDatos={direccionReservaBaseDatos}
              tituloReservaBaseDatos={tituloReservaBaseDatos}
              fechaInicioReunion={fechaInicioReunion}
              fechaFinalReunion={fechaFinalReunion}
              reservasFecha={reservasFecha}
              year={year[index]}
              mes={mes[index]}
              dia={semana[index]}
              horaReserva={hora}
              handleClickReserva={handleClickReserva}
              />
             )
           })
         }
      </tr>
     )
   }
}

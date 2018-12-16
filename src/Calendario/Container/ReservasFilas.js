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
    
     const diasLaborales = ['lunes','martes','miercoles','jueves','viernes','sabado']
     
     
     
     return (
       <tr>
         <th scope="row">{this.hora()}</th>
         {  
           diasLaborales.map((dia,index) => {
             
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
              year={year[index + 1]}
              mes={mes[index + 1]}
              dia={semana[index + 1]}
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

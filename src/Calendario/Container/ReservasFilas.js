import React, { Component } from 'react';
import { InputReserva } from './InputReserva.js'
import './ReservasFilas.css'

export class ReservasFilas extends Component {
   hora = () => {
    const { hora } = this.props 
    const horaNueva = hora.split(':')

      if(horaNueva[1] === '30')
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
      horaInicioReunion ,
      minutosTotales, 
      direccionReservaBaseDatos,
      nombreReservasBaseDatos,
      recargarComponenteCalendario,
      horaFinalReunion,
     } = this.props
    
     const diasLaborales = ['lunes','martes','miercoles','jueves','viernes','sabado']
     
     return (
       <tr>
         <th scope="row" className="horaDiseño" >{this.hora()}</th>
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
              horaInicioReunion={horaInicioReunion}
              horaFinalReunion={horaFinalReunion}
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

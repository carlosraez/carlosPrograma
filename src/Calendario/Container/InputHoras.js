import React, { Component } from 'react';
import { ReservasHechas } from './ReservasHechas.js'

export class Inputhoras extends Component {


   render() {
     const { horaInicio ,horaFin, tituloReserva, verOcupado, cssReserva, indice } = this.props
     return (
        <div className={cssReserva}>
        <ReservasHechas
             indice={indice}
             cssReserva={'ocupadoReserva'} 
             horaInicio={horaInicio}
             horaFin={horaFin}
             tituloReserva={tituloReserva}
             verOcupado={verOcupado}
             />
       </div>
     )
   }
}
import React, { Component } from 'react';


export class ReservasHechas extends Component {


   render() {
     const { horaInicio ,horaFin, tituloReserva, verOcupado, cssReserva, indice } = this.props
     return (
        <div className={cssReserva}>
        <p>{`${horaInicio[indice]}-${horaFin[indice]}`}</p>
        <p>{tituloReserva[indice]}</p>
         <button onClick={verOcupado} className="btn btn-link  btn-block">Ocupado</button>
    </div>
     )
   }
}
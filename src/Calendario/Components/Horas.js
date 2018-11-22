import React, { Component } from 'react';
import './DiaLibre.css'


export class Horas extends Component {
  state = {
      reservados : [],
      textoBoton: 'Reservar'
   }


  handleClickReserva = (event,dia,hora) => {
   const { reservados } =  this.state
   let reserva = reservados
   reserva.push(`${dia} ${hora}`)
   this.setState({
    reservados: reserva,
    textoBoton: 'Ocupado'
   })
  }

   render() {
     const { textoBoton, reservados }  = this.state
     const { hora , semana } = this.props
     return (
       <tr>
         <th scope="row">{hora}</th>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[1]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,this.props.semana[1],this.props.hora) }} className="btn btn-link btn-block">{textoBoton}</button></td>

     </tr>
     )
   }
}

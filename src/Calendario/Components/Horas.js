import React, { Component } from 'react';
import './DiaLibre.css'
//
// especificar de que mes es y de que año
export class Horas extends Component {
  state = {
      reservados : [],
      textoBoton: 'Reservar'
   }


  handleClickReserva = (event,dia,hora) => {
   console.log(event.target);
   let reserva = this.state.reservados
   reserva.push(`${dia} ${hora}`)
   this.setState({
    reservados: reserva,
    textoBoton: 'Ocupado'
   })
  }

   render() {
     const { semana , hora } = this.props
     const { reservados , textoBoton} = this.state
    return (
      <tr>
        <th scope="row">{hora}</th>
        <td ref={(ref) => {this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[1]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
        onClick={(event) => { this.handleClickReserva(event,semana[1],hora) }} className="btn btn-link btn-block">{textoBoton}</button></td>

    </tr>
    )
  }
}

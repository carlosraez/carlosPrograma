import React, { Component } from 'react';
import './DiaLibre.css'


export class Horas extends Component {
  state = {
      reservados : [],
      textoBoton: 'Reservar'
   }


  handleClickReserva = (event,dia,hora,mes) => {
   const { reservados } =  this.state
   let reserva = reservados
   reserva.push(`${dia} ${mes} ${hora}`)
   this.setState({
    reservados: reserva,
    textoBoton: 'Ocupado'
   })
  }

   render() {
     const { textoBoton, reservados }  = this.state
     const { hora , semana, mes } = this.props
     console.log(reservados);
     console.log(reservados.indexOf(`${semana[1]} ${hora}`));
     return (
       <tr>
         <th scope="row">{hora}</th>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[1]} ${mes[1]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,semana[1],hora,mes[1]) }} className="btn btn-link btn-block">{textoBoton}</button></td>

     </tr>
     )
   }
}

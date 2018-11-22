import React, { Component } from 'react';
import './DiaLibre.css'


export class Horas extends Component {
  state = {
      reservados : [],
      textoBoton: 'Reservar'
   }


  handleClickReserva = (event,dia,hora,mes,year) => {
   const { reservados } =  this.state
   let reserva = reservados
   reserva.push(`${dia} ${mes} ${year} ${hora}`)
   this.setState({
    reservados: reserva,
    textoBoton: 'Ocupado'
   })
  }

   render() {
     const { textoBoton, reservados }  = this.state
     const { hora , semana, mes, year } = this.props
     console.log(reservados);
     console.log(reservados.indexOf(`${semana[1]} ${hora}`));
     return (
       <tr>
         <th scope="row">{hora}</th>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[1]} ${mes[1]} ${year[1]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,semana[1],hora,mes[1],year[1]) }} className="btn btn-link btn-block">{textoBoton}</button></td>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[2]} ${mes[2]} ${year[2]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,semana[2],hora,mes[2],year[2]) }} className="btn btn-link btn-block">{textoBoton}</button></td>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[3]} ${mes[3]} ${year[3]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,semana[3],hora,mes[3],year[3]) }} className="btn btn-link btn-block">{textoBoton}</button></td>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[4]} ${mes[4]} ${year[4]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,semana[4],hora,mes[4],year[4]) }} className="btn btn-link btn-block">{textoBoton}</button></td>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[5]} ${mes[5]} ${year[5]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,semana[5],hora,mes[5],year[5]) }} className="btn btn-link btn-block">{textoBoton}</button></td>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={reservados.indexOf(`${semana[6]} ${mes[6]} ${year[6]} ${hora}`) > - 1 ?  'ocupado'  : 'libre' }><button
         onClick={(event) => { this.handleClickReserva(event,semana[6],hora,mes[6],year[6]) }} className="btn btn-link btn-block">{textoBoton}</button></td>
     </tr>
     )
   }
}

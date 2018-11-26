import React, { Component } from 'react';
import { InputReserva } from './InputReserva.js'
import './DiaLibre.css'


export class Reservas extends Component {

   state = {
     tituloReserva:'',
     horaInicio:'',
     horaFin:'',
     motivoReunion:'',
     poblacion:'',
     direccion:'',

   }

   handleChange = (event) => {
     const target = event.target
     const value = target.value
     const id = target.id
     this.setState({
       [id]: value
     })
   }

   render() {
     const { hora, handleClickReserva , semana, mes, year} = this.props

     return (
       <tr>
         <th scope="row">{hora}</th>
         <InputReserva
         year={year[1]}
         mes={mes[1]}
         dia={semana[1]}
         horaReserva={hora}
         handleChange={this.handleChange}
         handleClickReserva={handleClickReserva}
         />
         <InputReserva
         year={year[2]}
         mes={mes[2]}
         dia={semana[2]}
         horaReserva={hora}
         handleChange={this.handleChange}
         handleClickReserva={handleClickReserva}
         />
         <InputReserva
         year={year[3]}
         mes={mes[3]}
         dia={semana[3]}
         horaReserva={hora}
         handleChange={this.handleChange}
         handleClickReserva={handleClickReserva}
         />
         <InputReserva
         year={year[4]}
         mes={mes[4]}
         dia={semana[4]}
         horaReserva={hora}
         handleChange={this.handleChange}
         handleClickReserva={handleClickReserva}
         />
         <InputReserva
         year={year[5]}
         mes={mes[5]}
         dia={semana[5]}
         horaReserva={hora}
         handleChange={this.handleChange}
         handleClickReserva={handleClickReserva}
         />
         <InputReserva
         year={year[5]}
         mes={mes[6]}
         dia={semana[6]}
         horaReserva={hora}
         handleChange={this.handleChange}
         handleClickReserva={handleClickReserva}
         />
     </tr>
     )
   }
}

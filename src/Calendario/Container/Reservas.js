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
     const { hora } = this.props
     console.log(this.state);
     return (
       <tr>
         <th scope="row">{hora}</th>
         <InputReserva
         handleChange={this.handleChange}
         />
         <InputReserva
         handleChange={this.handleChange}
         />
         <InputReserva
         handleChange={this.handleChange}
         />
         <InputReserva
         handleChange={this.handleChange}
         />
         <InputReserva
         handleChange={this.handleChange}
         />
         <InputReserva
         handleChange={this.handleChange}
         />
     </tr>
     )
   }
}

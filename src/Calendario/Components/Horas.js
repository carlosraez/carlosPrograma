import React, { Component } from 'react';
import './DiaLibre.css'
//cuando es un string react lo guarda en el objeto ref es decir this.refs y cuando es una funcion lo escojes tu mediante una varible
// especificar de que mes es y de que año
export class Horas extends Component {
  state = {
      reservados : []
   }


  handleClickLunes = (event,dia,hora) => {
   let reserva = this.state.reservados
   reserva.push(`${dia} ${hora}`)
   // this.referenciaPrueba.style.backgroundColor = 'red'
   this.setState({
    reservados: reserva
   })
  }

   render() {
     console.log(this.state.reservados);
     const { props } = this
     return (
       <tr>
         <th scope="row">{props.hora}</th>
         <td ref={(ref) => { this.referenciaPrueba = ref }} className={this.state.reservados.indexOf(`${this.props.semana[1]} ${this.props.hora}`) > - 1 ?  'ocupado'  : 'libre' }><button id={props.hora}
         onClick={(event) => { this.handleClickLunes(event,this.props.semana[1],this.props.hora) }} className="btn btn-link btn-block">{props.textoBoton}</button></td>
         <td className="libre"><button id={props.id} onClick={(event) => { this.handleClickLunes(event,this.props.semana[2],this.props.hora) }}   className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={(event) => { this.handleClickLunes(event,this.props.semana[3],this.props.hora) }} className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={(event) => { this.handleClickLunes(event,this.props.semana[4],this.props.hora) }} className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={(event) => { this.handleClickLunes(event,this.props.semana[5],this.props.hora) }} className="btn btn-link btn-block">Reservar</button></td>
         <td className="libre"><button id={props.id} onClick={(event) => { this.handleClickLunes(event,this.props.semana[6],this.props.hora) }} className="btn btn-link btn-block">Reservar</button></td>
     </tr>
     )
   }
}

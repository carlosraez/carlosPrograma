import React, { Component } from 'react';
import DashVisitas from '../components/DashVisitas.js'
import { Captacion } from './Captacion.js'



export class Visitas extends Component {
  state = {
    usuarioCaptacion: false
   }

  handleClickCaptacion = () => {
    this.setState({
      usuarioCaptacion:true
    })
  }

   render() {
     return (
       <div>
      {
        this.state.usuarioCaptacion ?
        <Captacion
        usuario = {this.props.usuario}
        />
        :
        <DashVisitas
       handleClickCaptacion={this.handleClickCaptacion}
        />
      }
       </div>

     )
   }
}

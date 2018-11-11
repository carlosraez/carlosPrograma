import React, { Component } from 'react';
import { VisitaPuertaFria } from './VisitaPuertaFria.js'
import { PuertaFriaAdministradores } from './PuertaFriaAdministradores.js'
import { VisitaMantenimientoAdministradorLeed } from './VisitaMantenimientoAdministradorLeed.js'
import DashCaptacion from '../components/DashCaptacion.js'


export class Captacion extends Component {
  state = {
    usuarioPuertaFria: false,
    usuarioPuertaFriaAdministradores:false,
    hacerVisitaMantenimiento:false,
   }

  handleClickPuertaFria = () => {
    this.setState({
      usuarioPuertaFria:true
    })
  }

  handleClickRealizarVisita = () => {
    this.setState({
      hacerVisitaMantenimiento:true
    })
  }

  handleClickPuertaFriaAdministradores = () => {
    this.setState({
        usuarioPuertaFriaAdministradores:true
    })
  }

   render() {
     return (
       <div>
      {
        this.state.hacerVisitaMantenimiento ?
        <VisitaMantenimientoAdministradorLeed />
        :
        this.state.usuarioPuertaFria ?
        <VisitaPuertaFria />
        :
        this.state.usuarioPuertaFriaAdministradores ?
        <PuertaFriaAdministradores
        usuario = {this.props.usuario}
        />
        :
        <DashCaptacion
       handleClickRealizarVisita={this.handleClickRealizarVisita}
       handleClickPuertaFria={this.handleClickPuertaFria}
       handleClickPuertaFriaAdministradores={this.handleClickPuertaFriaAdministradores}
        />
      }
       </div>

     )
   }
}

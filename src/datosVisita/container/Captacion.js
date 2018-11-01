import React, { Component } from 'react';
import { VisitaPuertaFria } from './VisitaPuertaFria.js'
import { PuertaFriaAdministradores } from './PuertaFriaAdministradores.js'
import DashCaptacion from '../components/DashCaptacion.js'


export class Captacion extends Component {
  state = {
    usuarioPuertaFria: false,
    usuarioPuertaFriaAdministradores:false
   }

  handleClickPuertaFria = () => {
    this.setState({
      usuarioPuertaFria:true
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
        this.state.usuarioPuertaFria ?
        <VisitaPuertaFria />
        :
        this.state.usuarioPuertaFriaAdministradores ?
        <PuertaFriaAdministradores />
        :
        <DashCaptacion
       handleClickPuertaFria={this.handleClickPuertaFria}
       handleClickPuertaFriaAdministradores={this.handleClickPuertaFriaAdministradores}
        />
      }
       </div>

     )
   }
}

import React, { Component } from 'react';
import { VisitaPuertaFria } from './VisitaPuertaFria.js'
import DashCaptacion from '../components/DashCaptacion.js'



export class Captacion extends Component {
  state = {
    usuarioPuertaFria: false
   }

  handleClickPuertaFria = () => {
    this.setState({
      usuarioPuertaFria:true
    })
  }

   render() {
     return (
       <div>
      {
        this.state.usuarioPuertaFria ?
        <VisitaPuertaFria />
        :
        <DashCaptacion
       handleClickPuertaFria={this.handleClickPuertaFria}
        />
      }
       </div>

     )
   }
}

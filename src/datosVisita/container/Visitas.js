import React, { Component } from 'react';
import { VisitaPuertaFria } from './VisitaPuertaFria.js'
import DashVisitas from '../components/DashVisitas.js'



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
     console.log(this.state.usuarioCaptacion);
     return (
       <div>
      {
        this.state.usuarioCaptacion ?
        <VisitaPuertaFria />
        :
        <DashVisitas
       handleClickCaptacion={this.handleClickCaptacion}
        />
      }
       </div>

     )
   }
}

export default Visitas;

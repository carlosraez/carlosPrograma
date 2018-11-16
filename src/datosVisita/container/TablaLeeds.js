import React, { Component } from 'react';
import LeedAGestionar from '../components/LeedAGestionar.js'
import GestionLeedComponents from '../components/GestionLeedComponents'
import GestionLeedLayout from '../components/GestionLeedLayout'


export class TablaLeeds extends Component {
state = {
  gestionLeed : this.props.gestionLeed,
  cssEdicion:'inputOculto',
}

handleVolverALista = () => {
    console.log();
  this.setState({
    gestionLeed:false
  })
 }

componentWillReceiveProps = (nextProps) => {
    this.setState({
      gestionLeed:nextProps.gestionLeed
    })
 }

   render() {

     const { nombreLeed, listaLeeds } = this.props
     const leedActual = listaLeeds[nombreLeed] || []
      if (this.state.gestionLeed) {
       return (
         <GestionLeedLayout>
             <GestionLeedComponents
             handleClickBorrar={this.props.handleClickBorrar}
             handleClickGuardarModificacion={this.props.handleClickGuardarModificacion}
             handleClickRealizarVisita={this.props.handleClickRealizarVisita}
             handleChangeModi={this.props.handleChangeModi}
             cssEdicionModificar={this.props.cssEdicion}
             fechaLeed={leedActual.fechaVisita}
             nombrePresidente={leedActual.nombrePresidente}
             telefonoPresidente={leedActual.telefonoPresidente}
             mantenedor={leedActual.mantenedor}
             observacionleed={leedActual.observacionLeed}
             direccion={leedActual.direccion}
             poblacion={leedActual.poblacion}
             administrador={leedActual.administrador}
             tipoLeed={leedActual.tipo}
             handleClickModificar={this.props.handleClickModificar}
             handleVolverALista={this.handleVolverALista}
             />
         </GestionLeedLayout>
       )
     }
  else {
    return (
<div className="table-responsive">
     <table className="table">
 <thead>
   <tr>
     <th scope="col">Nº</th>
     <th scope="col">Fecha del Leed</th>
     <th scope="col">Direccion</th>
     <th scope="col">Poblacion</th>
     <th scope="col">Tipo</th>
     <th scope="col">Administrador</th>
     <th scope="col">Gestiona</th>
   </tr>
 </thead>
 <tbody>
 {
     listaLeeds.map((leed,i) => {
       return (
           <LeedAGestionar
           key={i}
           contador={i}
           id={i}
           fechaLeed={leed.fechaVisita}
           direccion={leed.direccion}
           poblacion={leed.poblacion}
           tipoLeed={leed.tipo}
           administrador={leed.administrador}
           handleClickGestionarLeed={this.props.handleClickGestionarLeed}
           />
       )
     })
 }
 </tbody>
</table>
</div>
    )
      }
   }
}

import React, { Component } from 'react';
import GestionLeedComponents from '../components/GestionLeedComponents'
import GestionLeedLayout from '../components/GestionLeedLayout'



export class GestionLeed extends Component {

   render() {
     return (
       <div>
       <GestionLeedLayout>
       <GestionLeedComponents
       direccion={this.props.direccion}
       poblacion={this.props.poblacion}
       nombreAdministrador={this.props.administrador}
       tipoLeed={this.props.tipoLeed}
       HandleVolverALista={this.props.HandleVolverALista}
       observacionleed={this.props.observacionleed}
       HandleClickModificar={this.props.HandleClickModificar}
       />
       </GestionLeedLayout>
       </div>
     )
   }
}

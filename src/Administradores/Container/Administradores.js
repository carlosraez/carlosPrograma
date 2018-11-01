import React, { Component } from 'react';
import DashAdministradores from '../Components/DashAdministradores.js'
import { NuevoAdministrador } from './NuevoAdministrador.js'


export class Administradores extends Component {
  state = {
    nuevoAdministrador:false
  }

  handleClickNuevoAdministrador = () => {
      this.setState({
        nuevoAdministrador:true
      })
  }

   render() {
     return (
       <div>
       {
         this.state.nuevoAdministrador ?
         <NuevoAdministrador />
         :
         <DashAdministradores
         handleClickNuevoAdministrador={this.handleClickNuevoAdministrador}
         />
       }
       </div>

     )
   }
}

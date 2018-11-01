import React, { Component } from 'react';
import DashAdministradores from '../Components/DashAdministradores.js'
import { NuevoAdministrador } from './NuevoAdministrador.js'
import { ListarAdministradores } from './ListarAdministradores.js'


export class Administradores extends Component {
  state = {
    nuevoAdministrador:false,
    listarAdministradores:false,
  }

  handleClickNuevoAdministrador = () => {
      this.setState({
        nuevoAdministrador:true
      })
  }

  handleClickListarAdministradores = () => {
    this.setState({
      listarAdministradores:true
    })
  }

   render() {
     return (
       <div>
       {
         this.state.nuevoAdministrador ?
         <NuevoAdministrador />
         :
         this.state.listarAdministradores ?
         <ListarAdministradores />
         :
         <DashAdministradores
         handleClickListarAdministradores={this.handleClickListarAdministradores}
         handleClickNuevoAdministrador={this.handleClickNuevoAdministrador}
         />
       }
       </div>

     )
   }
}

import React, { Component } from 'react';
import DashPresupuestos from '../Components/DashPresupuestos.js'
import { Mantenimientos } from './Mantenimientos.js'


export class Presupuestos extends Component {
  state = {
    presupuestoMantenimiento:false

   }



   handleClickMantenimiento = () => {
      this.setState({
        presupuestoMantenimiento:true
      })
   }






   render() {

     return (
       <div>
       {
         this.state.presupuestoMantenimiento ?
         <Mantenimientos />
         :
         <DashPresupuestos
            handleClickMantenimiento={this.handleClickMantenimiento}
         />
       }
       </div>

     )
   }
}

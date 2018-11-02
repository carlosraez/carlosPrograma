import React, { Component } from 'react';
import { NuevoAdministrador } from '../../Administradores/Container/NuevoAdministrador.js'
import { BusquedaAdministradoresTotales } from '../../Administradores/Container/BusquedaAdministradoresTotales.js'
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';
import VisitaLayout from '../components/visitaLayout.js'
import { TablaInformacion } from './TablaInformacion.js'


export class PuertaFriaAdministradores extends Component {
    state = {
      nuevoAdministrador: false
    }


  handleClickLeedMantenimiento = () => {
    alert('me has pulsado')
  }

  handleClickAlta = () => {
    this.setState({
        nuevoAdministrador: true
    })
  }

   handleClickBusqueda = () => {
     this.setState({
       nuevoAdministrador: false
     })
   }

  render() {
     return (
   <VisitaLayout>
     <div className="row">
       <div className="col-md-6">
        {
          this.state.nuevoAdministrador ?
          <NuevoAdministrador />
          :
          <BusquedaAdministradoresTotales
          handleClickAlta={this.handleClickAlta}
          />
        }
     {
       this.state.nuevoAdministrador ?
       <button className="btn btn-info btn-block" onClick={this.handleClickBusqueda}>Búsqueda Administrador</button>
       :
       null
     }
      </div>
      <div className="col-md-6">
        {
          <TablaInformacion  />
        }
     </div>
    </div>
    <div className="row">
  <div className="col-12 col-md-4">
        <div className="card cardStyle" >
         <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
          <div className="card-body">
          <h5 className="card-title">Leed Mantenimiento</h5>
          <p className="card-text">Presupuesto de mantenimiento de otra empresa</p>
          <button className="btn btn-outline-info" onClick={this.handleClickLeedMantenimiento}>Mantenimiento</button>
          </div>
       </div>
  </div>
  <div className="col-12 col-md-4">
        <div className="card cardStyle" >
         <img className="card-img-top imgDashboard" src={trabajo}  alt="Captacion" />
          <div className="card-body">
          <h5 className="card-title">Leed Finca Sin Ascensor</h5>
          <p className="card-text">Presupuesto de poner un ascensor en un edificio</p>
          <button className="btn btn-outline-info" onClick={this.handleClickPuertaFria}>Obra</button>
          </div>
       </div>
  </div>
  <div className="col-12 col-md-4">
        <div className="card cardStyle" >
         <img className="card-img-top imgDashboard" src={visita}  alt="Captacion" />
          <div className="card-body">
          <h5 className="card-title">Nada</h5>
          <p className="card-text">No le interesa nada por ahora</p>
          <button className="btn btn-outline-info" onClick={this.handleClickPuertaFria}>Nada</button>
          </div>
       </div>
      </div>
    </div>
 </VisitaLayout>
     )
  }
}

import React, { Component } from 'react';
import { NuevoAdministrador } from '../../Administradores/Container/NuevoAdministrador.js'
import  BusquedaAdministradoresTotales  from '../../Administradores/Components/BusquedaAdministradoresTotales.js'
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';
import VisitaLayout from '../components/visitaLayout.js'
import TablaInformacionLayout from '../components/TablaInformacionLayout.js'
import { firebaseApp } from '../../index.js'
import { TablaInformacion } from './TablaInformacion.js'


export class PuertaFriaAdministradores extends Component {
    state = {
      nuevoAdministrador: false,
      buscarAdministrador:'',
      listaAdministradores:[]
    }

    handleChange = (e) => {
      const target = e.target
      const value = target.value
      const id = target.id
      this.setState({
       [id] : value
      })

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

   componentDidMount = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     let listaBaseDatosAdmin = []
     ref.child('administradores').on('child_added', (snapshot) => {
         listaBaseDatosAdmin.push(snapshot.val())
         this.setState({
           listaAdministradores: listaBaseDatosAdmin
         })
     })

   }

  render() {
    const listaCompletaAdmin =  this.state.listaAdministradores
    const filtradoBusqueda = listaCompletaAdmin.filter((item) => {
    const busquedaActual = this.state.buscarAdministrador.toLowerCase()
    const despacho = item.despacho.toLowerCase()
    return  busquedaActual === despacho
  })
  const busqueda = filtradoBusqueda.map((item,i) => {
    if (item.visitas === 0) {
       item.visitas = 'no has visitado aún a este Administrador'
    }
    else if (item.visitas === 1) {
      item.visitas = 'solo has hecho 1 visita'
    }
    return (
      <TablaInformacion
      key={i}
      despacho={item.despacho}
      comercial={item.comercial}
      visitasNulas={item.noQuiereNada}
      volumenNegocio={item.volumenNegocio}
      leedsObraNueva={item.leedsObraNueva}
      leedsMantenimiento={item.leedsMantenimiento}
      visitaActual={item.visitas}
      />
    )
  })
     return (
   <VisitaLayout>
     <div className="row">
       <div className="col-md-6">
        {
          this.state.nuevoAdministrador ?
          <NuevoAdministrador
          usuario = {this.props.usuario}
          />
          :
          <BusquedaAdministradoresTotales
          handleClickAlta={this.handleClickAlta}
          handleChange={this.handleChange}
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
        <TablaInformacionLayout>
        {
         filtradoBusqueda.length ===  0 ?  'El Administrador que buscas no se encuentra en la base de datos'
        :
         busqueda
         }
       </TablaInformacionLayout>
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

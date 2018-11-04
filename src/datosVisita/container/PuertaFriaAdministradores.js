import React, { Component } from 'react';
import { NuevoAdministrador } from '../../Administradores/Container/NuevoAdministrador.js'
import  BusquedaAdministradoresTotales  from '../../Administradores/Components/BusquedaAdministradoresTotales.js'
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';
import VisitaLayout from '../components/visitaLayout.js'
import TablaInformacionLayout from '../components/TablaInformacionLayout.js'
import { firebaseApp } from '../../index.js'
import { TablaInformacion } from './TablaInformacion.js'
import swal from 'sweetalert';


export class PuertaFriaAdministradores extends Component {
    state = {
      nuevoAdministrador: false,
      buscarAdministrador:'',
      listaAdministradores:[],
      visitaNada:0,
      placeholder:'Escribe el despacho del administrador',
    }

    handleChange = (e) => {
      const target = e.target
      const value = target.value
      const id = target.id
      this.setState({
       [id] : value,
      })


    }

  handleClickNada = () => {
    swal('Lástima a ver si la proxima vez hay mas suerte')
    this.setState({
      visitaNada: this.state.visitaNada + 1
    })
  }

  handleClickLeedMantenimiento = () => {
    swal('Rellena los datos')
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
    const { listaAdministradores, buscarAdministrador, handlePlaceHolder } = this.state
    const busqueda = listaAdministradores.find((administrador)=>{
    return administrador.despacho.includes(buscarAdministrador)
    }) || ''
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
          handlePlaceHolder={handlePlaceHolder}
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
            <TablaInformacion
            despacho={busqueda.despacho}
            volumenNegocio={busqueda.volumenNegocio}
            poblacion={busqueda.poblacion}
            comercial={busqueda.comercial}
            />
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
          <button className="btn btn-outline-info" onClick={this.handleClickNada}>Nada</button>
          </div>
       </div>
      </div>
    </div>
 </VisitaLayout>
     )
  }
}

import React, { Component } from 'react';
import { NuevoAdministrador } from '../../Administradores/Container/NuevoAdministrador.js'
import  BusquedaAdministradoresTotales  from '../../Administradores/Components/BusquedaAdministradoresTotales.js'
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';
import LeedMantenimiento from '../components/LeedMantenimiento.js'
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
      placeholder:'Escribe el despacho del administrador',
      idAdministradorKey:[],
      despacho:'No hemos encontrado el administrador en la base de datos',
      visitasNulasActuaes:null,
      leedsMantenimientoActuales:null,
      leedsObraNueva:null,
      posicionAdminArray:null,
      poblacion:'',
      rellenarLeedMantenimiento:false
    }

    handleChange = (e) => {
      const target = e.target
      const value = target.value
      const id = target.id
      const { buscarAdministrador, listaAdministradores } = this.state
      const busqueda = listaAdministradores.find((administrador,i)=>{
      const busquedaAdministrador = administrador.despacho.toLowerCase()
      const busquedaUsuario = buscarAdministrador.toLowerCase()
      this.setState({
        posicionAdminArray: i
      })
      return busquedaAdministrador.includes(busquedaUsuario)
      }) || ''
      console.log(busqueda);
      const despacho = busqueda.despacho || 'No hemos encontrado el administrador en la base de datos'
      const comercial = busqueda.comercial || ''
      const visitasNulas =  busqueda.noQuiereNada
      const leedsMantenimiento = busqueda.leedsMantenimiento
      const leedsObraNueva = busqueda.leedsObraNueva
      const poblacion = busqueda.poblacion
      this.setState({
        [id] : value,
        despacho: despacho,
        comercial: comercial,
        visitasNulasActuaes: visitasNulas,
        leedsObraNuevaActuales: leedsObraNueva,
        leedsMantenimientoActuales: leedsMantenimiento,
        poblacion:poblacion
      })

    }

  handleClickNada = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     const actualizacion = {
       noQuiereNada: this.state.visitasNulasActuaes + 1
       }
   const administradorActual = this.state.idAdministradorKey[this.state.posicionAdminArray]
   ref.child('administradores').child(administradorActual).update(actualizacion)
    swal('Lástima a ver si la proxima vez hay mas suerte')
    this.setState({
      visitasNulasActuaes: this.state.visitasNulasActuaes + 1
    })
    this.componentDidMount()
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

   handleClickLeedMantenimiento = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     swal('Felcidades Tenemos una oportunidad')
     const actualizacion = {
       leedsMantenimiento: this.state.leedsMantenimientoActuales + 1,
       }
    const administradorActual = this.state.idAdministradorKey[this.state.posicionAdminArray]
    ref.child('administradores').child(administradorActual).update(actualizacion)
    this.setState({
      leedsMantenimiento: this.state.leedsMantenimientoActuales + 1,
      rellenarLeedMantenimiento:true
    })
    this.componentDidMount()


   }

   HandleClickGuardarLeedMantenimiento = () => {
     swal('Perfecto guardado')
     this.setState({
       rellenarLeedMantenimiento:false
     })
   }

   componentDidMount = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     let listaBaseDatosAdmin = []
     let idAdministrador = []
     ref.child('administradores').on('child_added', (snapshot) => {
         listaBaseDatosAdmin.push(snapshot.val())
         idAdministrador.push(snapshot.key)
         this.setState({
           listaAdministradores: listaBaseDatosAdmin,
           idAdministradorKey:idAdministrador
         })
     })
   }

  render() {
  console.log('soy el render');
  const {  handlePlaceHolder } = this.state;
  if (this.state.rellenarLeedMantenimiento) {
   return (
     <VisitaLayout
     titulo='Completa tu Leed Mantenimiento'
     >
        <LeedMantenimiento
        HandleClickGuardarLeedMantenimiento={this.HandleClickGuardarLeedMantenimiento}
        />
     </VisitaLayout>
   )
  }
  else {
    return (
  <VisitaLayout
  titulo='Completa tu Visita'
  >
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
           despacho={this.state.despacho}
           comercial={this.state.comercial}
           visitasNulas={this.state.visitasNulasActuaes}
           poblacion={this.state.poblacion}
           leedsMantenimiento={this.state.leedsMantenimientoActuales}
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
}

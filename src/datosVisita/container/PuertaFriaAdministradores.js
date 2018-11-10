import React, { Component } from 'react';
import { NuevoAdministrador } from '../../Administradores/Container/NuevoAdministrador.js'
import  BusquedaAdministradoresTotales  from '../../Administradores/Components/BusquedaAdministradoresTotales.js'
import visita from '../../pictures/visita.jpg';
import trabajo from '../../pictures/trabajo.jpg';
import LeedMantenimiento from '../components/LeedMantenimiento.js'
import LeedObraNueva from '../components/LeedObraNueva.js'
import VisitaLayout from '../components/visitaLayout.js'
import TablaInformacionLayout from '../components/TablaInformacionLayout.js'
import { firebaseApp } from '../../index.js'
import { TablaInformacion } from './TablaInformacion.js'
import moment from 'moment'
import swal from 'sweetalert';


export class PuertaFriaAdministradores extends Component {
    state = {
      nuevoAdministrador: false,
      buscarAdministrador:'',
      listaAdministradores:[],
      placeholder:'Escribe el despacho del administrador',
      idAdministradorKey:[],
      despacho:'No hemos encontrado el administrador en la base de datos',
      visitasNulasActuales:null,
      leedsMantenimientoActuales:null,
      leedsObraNuevaActuales:null,
      posicionAdminArray:null,
      poblacion:'',
      rellenarLeedMantenimiento:false,
      direccionLeed:'',
      poblacionLeed:'',
      mantenedorLeed:'',
      nombrePresidenteLeed:'',
      telefonoPresidenteLeed:'',
      observacionLeedManimiento:'',
      observacionLeedObraNueva:'',
      rellenarLeedObraNueva:false,
      ultimaVisita:'',
      comercial:'',
      visitaActual:null,
      listaLeeds:[]
    }

    handleChange = (e) => {
      const target = e.target
      const value = target.value
      const id = target.id
      const { listaAdministradores } = this.state
      const busqueda = listaAdministradores.find((administrador) => {
      const busquedaAdministrador = administrador.despacho.toLowerCase()
      const busquedaUsuario = value.toLowerCase()
      const resultado = busquedaUsuario === '' ?  '' : busquedaAdministrador.includes(busquedaUsuario)
      return resultado
      })  || ''
      const indiceBusqueda = listaAdministradores.indexOf(busqueda)
      this.setState({
        [id] : value,
        despacho: busqueda.despacho || 'No hemos encontrado el administrador en la base de datos',
        comercial: busqueda.comercial || '',
        visitasNulasActuaes:  busqueda.noQuiereNada,
        leedsMantenimientoActuales: busqueda.leedsMantenimiento,
        leedsObraNuevaActuales:busqueda.leedsObraNueva,
        poblacion: busqueda.poblacion,
        volumenNegocio: busqueda.volumenNegocio,
        visitasNulasActuales: busqueda.noQuiereNada,
        visitaActual:busqueda.visitas,
        ultimaVisita:busqueda.ultimaVisita,
        posicionAdminArray: indiceBusqueda
      })
    }

  handleClickNada = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     const actualizacion = {
       noQuiereNada: this.state.visitasNulasActuales + 1
       }
   const administradorActual = this.state.idAdministradorKey[this.state.posicionAdminArray]
   ref.child('administradores').child(administradorActual).update(actualizacion)
    swal('Lástima a ver si la proxima vez hay mas suerte')
    this.setState({
      visitasNulasActuales: this.state.visitasNulasActuales + 1
    })
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

   handleChangeLeedMantenimiento = (e) => {
     const target = e.target
     const value = target.value
     const id = target.id
     this.setState({
       [id]:value
     })
   }


    handleClickLeedMantenimiento = () => {
    const ref  = firebaseApp.database().ref('usuarios')
     swal('Felcidades Tenemos una oportunidad')
     this.setState({
      rellenarLeedMantenimiento:true,
    })
    const actualizacion = {
      leedsMantenimiento: this.state.leedsMantenimientoActuales + 1
      }
   const administradorActual = this.state.idAdministradorKey[this.state.posicionAdminArray]
   ref.child('administradores').child(administradorActual).update(actualizacion)

   }

   HandleClickGuardarLeedMantenimiento = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     const user = firebaseApp.auth().currentUser;
     swal('Perfecto guardado')
     this.setState({
       rellenarLeedMantenimiento:false,
     })
     const fecha = moment().format("DD/MM/YYYY");
     const administradorActual = this.state.despacho
     const posicionSiguienteLeed = this.state.listaLeeds.length
     const nuevoLeed = {
        [posicionSiguienteLeed] : {
          administrador: administradorActual,
          tipo:'Mantenimiento',
          fechaVisita:fecha,
          direccion: this.state.direccionLeed || '',
          poblacion: this.state.poblacionLeed || '',
          mantenedor: this.state.mantenedorLeed || '',
          nombrePresidente: this.state.nombrePresidenteLeed || '',
          telefonoPresidente: this.state.telefonoPresidenteLeed || '',
          observacionLeed: this.state.observacionLeedManimiento || '',
        }
     }
     ref.child(user.uid).child('visitas').child('captacionAdministrador').child('leeds').update(nuevoLeed)
     this.setState({
       leedsMantenimientoActuales: this.state.leedsMantenimientoActuales + 1
     })
   }

   handleClickLeedObraNueva = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     swal('Felcidades tenemos una oportunidad')
    this.setState({
      rellenarLeedObraNueva:true
    })
   const actualizacion = {
     leedsObraNueva: this.state.leedsObraNuevaActuales + 1
     }
  const administradorActual = this.state.idAdministradorKey[this.state.posicionAdminArray]
  ref.child('administradores').child(administradorActual).update(actualizacion)
  }

  HandleClickGuardarLeedObraNueva = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    swal('Perfecto guardado')
    this.setState({
      rellenarLeedObraNueva:false,
    })
    const fecha = moment().format("DD/MM/YYYY");
    const administradorActual = this.state.despacho
    const posicionSiguienteLeed = this.state.listaLeeds.length
    const nuevoLeed = {
       [posicionSiguienteLeed] : {
         administrador: administradorActual,
         fechaVisita: fecha,
         tipo:'Finca sin Ascensor',
         direccion: this.state.direccionLeed || '',
         poblacion: this.state.poblacionLeed || '',
         nombrePresidente: this.state.nombrePresidenteLeed || '',
         telefonoPresidente: this.state.telefonoPresidenteLeed || '',
         observacionLeed : this.state.observacionLeedObraNueva || '',
       }
    }
    ref.child(user.uid).child('visitas').child('captacionAdministrador').child('leeds').update(nuevoLeed)
    this.setState({
      leedsObraNuevaActuales: this.state.leedsObraNuevaActuales + 1
    })
  }

  HandleClickSumarVisita = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    swal('Visita Añadida Correctamente')
    const fecha = moment().format("DD/MM/YYYY")
    const actualizacion = {
      visitas: this.state.visitaActual + 1,
      ultimaVisita:fecha
      }
  const administradorActual = this.state.idAdministradorKey[this.state.posicionAdminArray]
  ref.child('administradores').child(administradorActual).update(actualizacion)
  this.setState({
      visitaActual: this.state.visitaActual + 1
    })
  }

   componentDidMount = () => {
     const ref  = firebaseApp.database().ref('usuarios')
     const user = firebaseApp.auth().currentUser;
     let listaBaseDatosleeds = []
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
     ref.child(user.uid).child('visitas').child('captacionAdministrador').child('leeds').on('child_added', (snapshot) => {
         listaBaseDatosleeds.push(snapshot.val())
         this.setState({
           listaLeeds: listaBaseDatosleeds,
         })
     })
   }

  render() {
  const {  handlePlaceHolder } = this.state;
  if (this.state.rellenarLeedMantenimiento) {
   return (
     <VisitaLayout
     titulo='Completa tu Leed Mantenimiento'
     >
        <LeedMantenimiento
        handleChange={this.handleChangeLeedMantenimiento}
        HandleClickGuardarLeedMantenimiento={this.HandleClickGuardarLeedMantenimiento}
        />
     </VisitaLayout>
   )
  }
  else if (this.state.rellenarLeedObraNueva) {
   return (
     <VisitaLayout
     titulo='Completa tu Leed Obra Nueva'
     >
        <LeedObraNueva
        handleChange={this.handleChangeLeedMantenimiento}
        HandleClickGuardarLeedObraNueva={this.HandleClickGuardarLeedObraNueva}
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
           ultimaVisita={this.state.ultimaVisita}
           visitaActual={this.state.visitaActual}
           despacho={this.state.despacho}
           comercial={this.state.comercial}
           visitasNulas={this.state.visitasNulasActuales}
           poblacion={this.state.poblacion}
           volumenNegocio={this.state.volumenNegocio}
           leedsMantenimiento={this.state.leedsMantenimientoActuales}
           leedsObraNueva={this.state.leedsObraNuevaActuales}
           HandleClickSumarVisita={this.HandleClickSumarVisita}
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
         <button className="btn btn-outline-info" onClick={this.handleClickLeedObraNueva}>Obra</button>
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

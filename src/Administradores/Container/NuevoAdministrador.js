import React, { Component } from 'react';
import { firebaseApp } from '../../index.js'
import NuevoAdministradorLayout from '../Components/AltaAdministradorLayout.js'
import AltaAdministradorForm from '../Components/AltaAdministradorForm.js'
import swal from 'sweetalert';



export class NuevoAdministrador extends Component {
  state = {
    despacho:'',
    direccion:'',
    postal:'',
    telefonoDespacho:'',
    nombreAdministrador:'',
    telefonoMovilAdministrador:'',
    emailAdministrador:'',
    horarioDespacho:'',
    personaAtencion:'',
    observacionAdministrador:'',
    visitas:0,
    leedsMantenimiento:0,
    cantidadAscensoresLeed:0,
    leedsObraNueva:0,
    noQuiereNada:0,
    volumenNegocio:0,
    comercial:this.props.usuario
  }



 handleClickGuardarAdministrador = () => {
   this.guardarAdministrador()
 }



  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const id = target.id
    this.setState({
     [id] : value
    })

  }

  guardarAdministrador = () => {
    const ref  = firebaseApp.database().ref('usuarios')
     const nuevoAdministrador = {
      despacho: this.state.despacho || '',
      poblacion: this.state.poblacion || '',
      postal:this.state.postal || '',
      direccion:this.state.direccion || '',
      telefonoDespacho:this.state.telefonoDespacho || '',
      nombreAdministrador:this.state.nombreAdministrador || '',
      emailAdministrador:this.state.emailAdministrador || '',
      telefonoMovilAdministrador:this.state.telefonoMovilAdministrador || '',
      horarioDespacho:this.state.horarioDespacho || ''  ,
      personaAtencion:this.state.personaAtencion || '',
      observacionAdministrador:this.state.observacionAdministrador || '',
      comercial:this.state.comercial,
      leedsMantenimiento:this.state.leedsMantenimiento,
      cantidadAscensoresLeed:this.state.cantidadAscensoresLeed,
      leedsObraNueva:this.state.leedsMantenimiento,
      volumenNegocio:this.state.volumenNegocio,
      noQuiereNada:this.state.noQuiereNada,
      visitas:this.state.visitas,
    }
    ref.child('administradores').push(nuevoAdministrador)
    swal('Se ha guardado correctamente')
  }

  render() {
     return (
       <NuevoAdministradorLayout>
         <AltaAdministradorForm
         handleClickGuardarAdministrador={this.handleClickGuardarAdministrador}
         handleChange={this.handleChange}
         />
        </NuevoAdministradorLayout>
     )
  }
}

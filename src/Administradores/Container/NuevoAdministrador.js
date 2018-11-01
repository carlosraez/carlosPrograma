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
    observacionAdministrador:''
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
    const nuevaVisita = {
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
    }
    ref.child('administradores').push(nuevaVisita)
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

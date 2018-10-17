import React, { Component } from 'react'
import ModalHistoricoConversacion from '../../widgets/components/historicoConversacion.js'
import ModalVisita from '../../widgets/components/modalVisita.js'
import ModalAscensor from '../../widgets/components/modalAscensor.js'
import { firebaseApp } from '../../index.js'
import swal from 'sweetalert';

export class ModalPrincipal extends Component {
  state = {
    cssEdicion:'inputOculto',
    historico:false,
    modalVisita:true,
    modalAscensor:false,
    numeroAscensor: 0,
    historicoConversacion: []
  }

  handleClickSiguienteAscensor = () => {
    const length = this.props.vistitaPulsada.ascensor.length
    const cantidadAscensoresActual = this.state.numeroAscensor
    if( cantidadAscensoresActual <  length  - 1) {
      this.setState((state) => {
        return {numeroAscensor: state.numeroAscensor + 1}
      })
    }
  }

    handleVerLosAscensores = () => {
      this.setState({
        modalAscensor: true,
        modalVisita:false,
      })
    }

  handleGuardarModificacion = () => {
    this.setState({
      cssEdicion:'inputOculto'
    })

    swal("La visita ha sido Modificada")
  }

  handleModificarVisita = () => {
    this.setState({
      cssEdicion:'verInput',
    })
  }

   historicoConversacion = () => {
    this.setState({
      historico:true
    })
   }


   handleChange = (event) => {
     const target = event.target
      const value = target.value
      const id = target.id
      this.setState({
        [id]: value
      })
   }

    handleBorrarVisita = () =>{
      const ref  = firebaseApp.database().ref('usuarios')
      const user = firebaseApp.auth().currentUser;
      swal({
       title: "¿Estas seguro que quieres borrar la visita?",
       text: "Si pulsas la visita se eliminará para siempre",
      icon: "warning",
     buttons: true,
     dangerMode: true,
    })
    .then((borrado) => {
     if (borrado) {
        const borrarVisita = this.props.idVisitaPulsada
       ref.child(user.uid).child('visita').child(borrarVisita).remove()
       let despuesBorrado = []
       ref.child(user.uid).child('visita').on('child_added', (sanpshot) =>{
        despuesBorrado.push(sanpshot.val())
       })
       this.setState({
         listaCompleta:despuesBorrado,
         modalVisible:false
       })
       swal("La visita ha sido Borrada", {
         icon: "success",
       });
     } else {
        swal('¡¡Aun sigues teniendo la visita!!')
     }
       });
    }


  handleChangeAnteriorAscensor = () => {
           if (this.state.numeroAscensor > 0 ){
             this.setState((state) => {
               return {numeroAscensor: state.numeroAscensor - 1}
             })
           }
         }


  handleVolverInformacion = () => {
    this.setState({
      modalAscensor: false,
    })
  }

handleClickVolverModal = () =>{
  this.setState({
    historico: false,
  })
}

componentDidMount = () => {
  const ref  = firebaseApp.database().ref('usuarios')
  const user = firebaseApp.auth().currentUser;
   const visitaAModificar = this.props.idVisitaPulsada
   const ListaConversacion = []
   ref.child(user.uid).child('visita').child(visitaAModificar).child('conversacion').on('child_added', (sanpshot) =>{
   ListaConversacion.push(sanpshot.val())
   })
   this.setState({
     historicoConversacion: ListaConversacion
   })
}

  render() {
    const arrayConversacion = this.state.historicoConversacion
    return (
      <div>
      {
        this.state.modalAscensor ?
        <ModalAscensor
        handleVolverInformacion={this.handleVolverInformacion}
        rae={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].rae}
        paradas={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].paradas}
        anchoHueco={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].anchoHueco}
        fondoHueco={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].fondoHueco}
        personas={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].personas}
        puertasCabina={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].puertasCabina}
        puertasPiso={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].puertasPiso}
        maquina={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].maquina}
        embarques={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].embarques}
        observacionAscensor={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].observacionAscensor}
        handleClickSiguienteAscensor={this.handleClickSiguienteAscensor}
        handleChangeAnteriorAscensor={this.handleChangeAnteriorAscensor}
        cssEdicion={this.state.cssEdicion}
        handleChange={this.handleChange}
        handleGuardarModificacion={this.handleGuardarModificacion}
        />
        :
        this.state.historico ?
        <ModalHistoricoConversacion
        handleClickVolverModal={this.handleClickVolverModal}
        arrayConversacion={arrayConversacion}
          />
        :
        <ModalVisita
         vistitaPulsada={this.props.vistitaPulsada}
         idVisitaPulsada={this.props.idVisitaPulsada}
         historicoConversacion={this.historicoConversacion}
         handleVerLosAscensores={this.handleVerLosAscensores}
         handleCerrarModal={this.handleCerrarModal}
         tipoPresupuesto={this.props.vistitaPulsada.tipoPresupuesto}
         poblacion={this.props.vistitaPulsada.poblacion}
         codigoPostal={this.props.vistitaPulsada.postal}
         direccion={this.props.vistitaPulsada.calle}
         nombrePresidente={this.props.vistitaPulsada.nombrePresidente}
         telefonoPresidente={this.props.vistitaPulsada.telefonoPresidente}
         correElectronico={this.props.vistitaPulsada.emailPresidente}
         horaVisita={this.props.vistitaPulsada.horaVisita}
         administrador={this.props.vistitaPulsada.nombreAdministrador}
         marcaAscensor={this.props.vistitaPulsada.marca}
         mantenedor={this.props.vistitaPulsada.mantenedor}
         numeroAscensores={this.props.vistitaPulsada.numeroAscensores}
         handleChange={this.handleChange}
         handleModificarVisita={this.handleModificarVisita}
         cssEdicion={this.state.cssEdicion}
         handleGuardarModificacion={this.handleGuardarModificacion}
         handleNuevaConversacion={this.handleNuevaConversacion}
        />
      }
      </div>
    )
  }
}

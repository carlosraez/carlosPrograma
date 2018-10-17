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
    historicoConversacion: [],
    numeroTotalAscensores: this.props.vistitaPulsada.ascensor.length,
    numeroAscensorActual:1
  }

  handleClickSiguienteAscensor = () => {
    const length = this.state.numeroTotalAscensores
    const cantidadAscensoresActual = this.state.numeroAscensor
    if( cantidadAscensoresActual <  length  - 1) {
      this.setState((state) => {
        return {
          numeroAscensor: state.numeroAscensor + 1,
          numeroAscensorActual: state.numeroAscensorActual + 1
        }
      })
    }
  }

  handleChangeAnteriorAscensor = () => {
           if (this.state.numeroAscensor > 0 ){
             this.setState((state) => {
               return {
                numeroAscensor: state.numeroAscensor - 1,
                numeroAscensorActual: state.numeroAscensorActual - 1
               }
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
        anchoHueco={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].anchoHueco}
        cssEdicion={this.state.cssEdicion}
        embarques={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].embarques}
        fondoHueco={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].fondoHueco}
        handleChange={this.handleChange}
        handleChangeAnteriorAscensor={this.handleChangeAnteriorAscensor}
        handleClickSiguienteAscensor={this.handleClickSiguienteAscensor}
        handleGuardarModificacion={this.handleGuardarModificacion}
        handleVolverInformacion={this.handleVolverInformacion}
        maquina={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].maquina}
        numeroAscensor={this.state.numeroAscensorActual}
        observacionAscensor={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].observacionAscensor}
        paradas={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].paradas}
        personas={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].personas}
        puertasCabina={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].puertasCabina}
        puertasPiso={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].puertasPiso}
        rae={this.props.vistitaPulsada.ascensor[this.state.numeroAscensor].rae}
        />
        :
        this.state.historico ?
        <ModalHistoricoConversacion
        arrayConversacion={arrayConversacion}
        handleClickVolverModal={this.handleClickVolverModal}
          />
        :
        <ModalVisita
         administrador={this.props.vistitaPulsada.nombreAdministrador}
         codigoPostal={this.props.vistitaPulsada.postal}
         correElectronico={this.props.vistitaPulsada.emailPresidente}
         cssEdicion={this.state.cssEdicion}
         direccion={this.props.vistitaPulsada.calle}
         handleCerrarModal={this.handleCerrarModal}
         handleChange={this.handleChange}
         handleGuardarModificacion={this.handleGuardarModificacion}
         handleModificarVisita={this.handleModificarVisita}
         handleNuevaConversacion={this.handleNuevaConversacion}
         handleVerLosAscensores={this.handleVerLosAscensores}
         historicoConversacion={this.historicoConversacion}
         horaVisita={this.props.vistitaPulsada.horaVisita}
         idVisitaPulsada={this.props.idVisitaPulsada}
         mantenedor={this.props.vistitaPulsada.mantenedor}
         marcaAscensor={this.props.vistitaPulsada.marca}
         nombrePresidente={this.props.vistitaPulsada.nombrePresidente}
         numeroAscensores={this.props.vistitaPulsada.numeroAscensores}
         numeroTotalAscensores={this.state.numeroTotalAscensores}
         poblacion={this.props.vistitaPulsada.poblacion}
         telefonoPresidente={this.props.vistitaPulsada.telefonoPresidente}
         tipoPresupuesto={this.props.vistitaPulsada.tipoPresupuesto}
         vistitaPulsada={this.props.vistitaPulsada}
        />
      }
      </div>
    )
  }
}

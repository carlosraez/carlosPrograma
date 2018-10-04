import React, { Component } from 'react'
import Visita from './visitaList.js'
import ModalContainer from '../../widgets/container/modal-container.js'
import swal from 'sweetalert';
import { firebaseApp } from '../../index.js'
import ModalHistoricoConversacion from '../../widgets/components/historicoConversacion.js'
import ModalVisita from '../../widgets/components/modalVisita.js'
import ModalAscensor from '../../widgets/components/modalAscensor.js'
import './modal.css'

class ListarVisitaCompleta extends Component {
  state = {
    modalVisible: false,
    vistitaPulsada: 0,
    numeroAscensor: 0,
    listaCompleta: [],
    idTodasVisitas:[],
    historicoConver:[],
    cssEdicion:'inputOculto',
    proxVisita:'',
    textoInfoVisita:'',
    historico:false,
    modalVisita:true,
    modalAscensor:false,
  }

  handleClickSiguienteAscensor = () => {
    const length = this.state.listaCompleta[this.state.vistitaPulsada].ascensor.length
    const cantidadAscensoresActual = this.state.numeroAscensor
    if( cantidadAscensoresActual <  length  - 1) {
      this.setState((state) => {
        return {numeroAscensor: state.numeroAscensor + 1}
      })
    }
  }

    handleChangeAnteriorAscensor = () => {
         if (this.state.numeroAscensor > 0 ){
           this.setState((state) => {
             return {numeroAscensor: state.numeroAscensor - 1}
           })
         }
       }

    handleVerClickVerListaCompleta = (event) => {
    const numeroVisitaPulsada = event.target.id
    const { listaCompleta } = this.state
    const conversacion = listaCompleta[numeroVisitaPulsada].conversacion
    const ultimaConversacion = conversacion[conversacion.length - 1];
    const fecha = ultimaConversacion.proxVisita
    const accionUltima = ultimaConversacion.textoInfoVisita
    this.setState({
      modalVisible:true,
      vistitaPulsada: numeroVisitaPulsada,
      proxVisita: fecha,
      textoInfoVisita: accionUltima
    })

  }

  handleCerrarModal = () =>{
    this.setState({
      modalVisible:false
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
      const borrarVisita = this.state.idTodasVisitas[this.state.vistitaPulsada]
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

  componentDidMount = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const listaBaseDatos = []
    const idVisitas = []
    ref.child(user.uid).child('visita').on('child_added', (sanpshot) =>{
    listaBaseDatos.push(sanpshot.val())
    })
    this.setState({
      listaCompleta:listaBaseDatos

    })
    ref.child(user.uid).child('visita').on('child_added', (snapshot) => {
      idVisitas.push(snapshot.key)
        })
       this.setState({
       idTodasVisitas: idVisitas,
       modalVisible:false,
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

  handleModificarVisita = () => {
    this.setState({
      cssEdicion:'verInput',
    })
  }

  handleGuardarModificacion = () => {
    this.setState({
      cssEdicion:'inputOculto'
    })

    swal("La visita ha sido Modificada")
  }

  guardarAntiguaConversacion = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const visitaAModificar = this.state.idTodasVisitas[this.state.vistitaPulsada]
    const antiguaConversacion = [{
       fechaConversacionAntigua: this.state.listaCompleta[this.state.vistitaPulsada].proxVisita,
       antiguaConversacion: this.state.listaCompleta[this.state.vistitaPulsada].textoInfoVisita
     }]
     this.setState({
       historicoConver: this.state.historicoConver.concat(antiguaConversacion)
     })
    ref.child(user.uid).child('visita').child(visitaAModificar).se(this.state.historicoConver)
   }

  handleNuevaConversacion = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const visitaAModificar = this.state.idTodasVisitas[this.state.vistitaPulsada]
    const nuevaConversacion = {
      textoInfoVista:this.state.textoInfoVisita,
      proxVisita:this.state.proxVisita,
    }
   ref.child(user.uid).child('visita').child(visitaAModificar).update(nuevaConversacion)
   swal('Se ha añadido nueva Accion')
   let despuesModificacionConversacion = []
   ref.child(user.uid).child('visita').on('child_added', (sanpshot) =>{
    despuesModificacionConversacion.push(sanpshot.val())
   })
   this.setState({
     listaCompleta:despuesModificacionConversacion,
   })
  this.guardarAntiguaConversacion()
  }

  historicoConversacion = () => {
    this.setState({
      historico:true
    })
  }

  handleVerLosAscensores = () => {
    this.setState({
      modalAscensor: true,
      modalVisita:false,
    })
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

  render () {
    console.log('soy el render');
    const listaCompleta =  this.state.listaCompleta
    const pulsada = this.state.vistitaPulsada
    const listaActual = listaCompleta[pulsada] || []
    const listaConversacion = listaActual.conversacion || []

    if (this.state.modalVisible) {
      return (
        <ModalContainer>
              <div className="Modal">
              <div className="container">
             <h1 className="tituloPrincipal">Descripcion de la visita Realizada</h1>
            {
              this.state.modalAscensor ?
              <ModalAscensor
              handleVolverInformacion={this.handleVolverInformacion}
              rae={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].rae}
              paradas={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].paradas}
              anchoHueco={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].anchoHueco}
              fondoHueco={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].fondoHueco}
              personas={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].personas}
              puertasCabina={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].puertasCabina}
              puertasPiso={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].puertasPiso}
              maquina={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].maquina}
              embarques={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].embarques}
              observacionAscensor={this.state.listaCompleta[this.state.vistitaPulsada].ascensor[this.state.numeroAscensor].observacionAscensor}
              handleClickSiguienteAscensor={this.handleClickSiguienteAscensor}
              handleChangeAnteriorAscensor={this.handleChangeAnteriorAscensor}
              cssEdicion={this.state.cssEdicion}
              handleChange={this.handleChange}
              handleGuardarModificacion={this.handleGuardarModificacion}
              />
              :
              this.state.historico ?
              listaConversacion.map( (item,i) => {
                 return (
                   <ModalHistoricoConversacion
                   key={i}
                   handleClickVolverModal={this.handleClickVolverModal}
                   fechaConversacionAntigua={item.proxVisita}
                   conversacionAntigua={item.textoInfoVisita}
                   />
                 )
              })
              :
              <ModalVisita
               historicoConversacion={this.historicoConversacion}
               handleVerLosAscensores={this.handleVerLosAscensores}
               handleCerrarModal={this.handleCerrarModal}
               tipoPresupuesto={this.state.listaCompleta[this.state.vistitaPulsada].tipoPresupuesto}
               poblacion={this.state.listaCompleta[this.state.vistitaPulsada].poblacion}
               codigoPostal={this.state.listaCompleta[this.state.vistitaPulsada].postal}
               direccion={this.state.listaCompleta[this.state.vistitaPulsada].calle}
               nombrePresidente={this.state.listaCompleta[this.state.vistitaPulsada].nombrePresidente}
               telefonoPresidente={this.state.listaCompleta[this.state.vistitaPulsada].telefonoPresidente}
               correElectronico={this.state.listaCompleta[this.state.vistitaPulsada].emailPresidente}
               horaVisita={this.state.listaCompleta[this.state.vistitaPulsada].horaVisita}
               administrador={this.state.listaCompleta[this.state.vistitaPulsada].nombreAdministrador}
               marcaAscensor={this.state.listaCompleta[this.state.vistitaPulsada].marca}
               mantenedor={this.state.listaCompleta[this.state.vistitaPulsada].mantenedor}
               conversacion={this.state.textoInfoVisita}
               fechaConversacion={this.state.proxVisita}
               numeroAscensores={this.state.listaCompleta[this.state.vistitaPulsada].numeroAscensores}
               handleChange={this.handleChange}
               handleModificarVisita={this.handleModificarVisita}
               cssEdicion={this.state.cssEdicion}
               handleGuardarModificacion={this.handleGuardarModificacion}
               handleNuevaConversacion={this.handleNuevaConversacion}
              />
            }
            <div>
            <button type="button" onClick={this.handleBorrarVisita} className="btn btn-danger botonBorrar">Borrar Visita</button>
            </div>
            <div>
             <button type="button " className="Modal-close" onClick={this.handleCerrarModal} ></button>
             </div>
            </div>
           </div>
        </ModalContainer>
      )
    }
    return (
         listaCompleta.map((item, i) => {
          const listaConversaciones = item.conversacion
          const ultimalistaConversaciones = listaConversaciones[listaConversaciones.length -1]
          const proxVisitaMostrar = ultimalistaConversaciones.proxVisita
          let contador  = i + 1
          return (
          <Visita
        direccion={item.calle}
        poblacion={item.poblacion}
        mantenedor={item.mantenedor}
        codigoPostal={item.postal}
        tipoPresupuesto={item.tipoPresupuesto}
        importancia={item.interes}
        administrador={item.nombreAdministrador}
        proxVisita={proxVisitaMostrar}
        key={i}
        contador={contador}
        handleVerClick={this.handleVerClickVerListaCompleta}
        numeroDeVisita={i}
          />
        )
      })

        )
    }
  }


export default ListarVisitaCompleta

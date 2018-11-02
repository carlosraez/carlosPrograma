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
    numeroTotalAscensores: this.props.visitaPulsada.ascensor.length,
    numeroAscensorActual:1,
    poblacionModi:'',
    postalModi:'',
    calleModi:'',
    nombrePresidenteModi:'',
    telefonoPresidenteModi:'',
    emailPresidenteModi:'',
    horaVisitaModi:'',
    nombreAdministradorModi:'',
    tipoPresupuestoModi:'',
    marcaModi:'',
    mantenedorModi:'',
    raeModi:'',
    paradasModi:'',
    anchoHuecoModi:'',
    fondoHuecoModi:'',
    personasModi:'',
    puertasPisoModi:'',
    puertasCabinaModi:'',
    observacionAscensorModi:'',
    maquinaModi:'',
    embarquesModi:'',
    visitaModal:[],
    visitaActual: this.props.numeroArrayPulsada
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
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const visitaAModificar = this.props.idVisitaPulsada
    const {
       calleModi ,
       postalModi,
       poblacionModi,
       nombrePresidenteModi,
       telefonoPresidenteModi,
       emailPresidenteModi,
       horaVisitaModi,
       nombreAdministradorModi,
       tipoPresupuestoModi,
       marcaModi,
       mantenedorModi,
       raeModi,
       paradasModi,
       anchoHuecoModi,
       fondoHuecoModi,
       personasModi,
       puertasCabinaModi,
       puertasPisoModi,
       maquinaModi,
       embarquesModi,
       observacionAscensorModi,
        } = this.state
    const visitasModificadas = [
      calleModi ,
      postalModi ,
      poblacionModi,
      nombrePresidenteModi,
      telefonoPresidenteModi,
      emailPresidenteModi,
      horaVisitaModi,
      nombreAdministradorModi,
      tipoPresupuestoModi,
      marcaModi,
      mantenedorModi,
    ]
    const clavesAModificar = [
    'calle',
    'postal',
    'poblacion',
    'nombePresidente',
    'telefonoPresidente',
    'emailPresidente',
    'horaVisita',
    'nombreAdministrador',
    'tipoPresupuesto',
    'marca',
    'mantenedor',
  ]

  for (let i = 0; i < visitasModificadas.length; i++) {
       if (visitasModificadas[i] === '') { }
       else {
        const nuevaModificacion = {
          [clavesAModificar[i]]:visitasModificadas[i]
        }
        ref.child(user.uid).child('visitas').child('puertaFria').child(visitaAModificar).update(nuevaModificacion)
       }
  }

  const ascensorModificado = [
    raeModi,
    paradasModi,
    anchoHuecoModi,
    fondoHuecoModi,
    personasModi,
    puertasCabinaModi,
    puertasPisoModi,
    maquinaModi,
    embarquesModi,
    observacionAscensorModi,

  ]

  const clavesAscensorModificar = [
  'rae',
  'paradas',
  'anchoHueco',
  'fondoHueco',
  'personas',
  'puertasCabina',
  'puertasPiso',
  'maquina',
  'embarques',
  'observacionAscensor',
  ]

    for (let i = 0; i < ascensorModificado.length; i++) {
      const posicionAscensorActualArray = this.state.numeroAscensorActual - 1
       if (ascensorModificado[i] === '') { }
       else {
         console.log(clavesAscensorModificar[i], ascensorModificado[i]);
         const modificacionAscensor = {
           [clavesAscensorModificar[i]]: ascensorModificado[i]
         }
         ref.child(user.uid).child('visitas').child('puertaFria').child(visitaAModificar).child('ascensor').child(posicionAscensorActualArray).update(modificacionAscensor)
       }
    }


    swal("La visita ha sido Modificada")

   this.setState({
     cssEdicion:'inputOculto'
   })
   this.componentDidMount()
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

    handleBorrarAccion = (event) => {
      const ref  = firebaseApp.database().ref('usuarios')
      const user = firebaseApp.auth().currentUser;
      const idVisitaPulsada = this.props.idVisitaPulsada
      const idAccion = event.target.id
      ref.child(user.uid).child('visitas').child('puertaFria').child(idVisitaPulsada).child('conversacion').child(idAccion).remove()
      swal('La Accion ha sido borrada')
      this.componentDidMount()
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
       ref.child(user.uid).child('visitas').child('puertaFria').child(borrarVisita).remove()
       let despuesBorrado = []
       ref.child(user.uid).child('visita').child('puertaFria').on('child_added', (sanpshot) =>{
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
   const visitas = []
   ref.child(user.uid).child('visitas').child('puertaFria').child(visitaAModificar).child('conversacion').on('child_added', (sanpshot) => {
   ListaConversacion.push(sanpshot.val())
   })
   ref.child(user.uid).child('visitas').child('puertaFria').on('child_added', (sanpshot) => {
   visitas.push(sanpshot.val())
   })
   const visitaActualModal = visitas[this.state.visitaActual]
   this.setState({
     historicoConversacion: ListaConversacion,
     visitaModal: visitaActualModal
   })

}

  render() {
    const arrayConversacion = this.state.historicoConversacion
    return (
      <div>
      {
        this.state.modalAscensor ?
        <ModalAscensor
        anchoHueco={this.state.visitaModal.ascensor[this.state.numeroAscensor].anchoHueco}
        cssEdicion={this.state.cssEdicion}
        embarques={this.state.visitaModal.ascensor[this.state.numeroAscensor].embarques}
        fondoHueco={this.state.visitaModal.ascensor[this.state.numeroAscensor].fondoHueco}
        handleChange={this.handleChange}
        handleChangeAnteriorAscensor={this.handleChangeAnteriorAscensor}
        handleClickSiguienteAscensor={this.handleClickSiguienteAscensor}
        handleGuardarModificacion={this.handleGuardarModificacion}
        handleVolverInformacion={this.handleVolverInformacion}
        maquina={this.state.visitaModal.ascensor[this.state.numeroAscensor].maquina}
        numeroAscensor={this.state.numeroAscensorActual}
        observacionAscensor={this.state.visitaModal.ascensor[this.state.numeroAscensor].observacionAscensor}
        paradas={this.state.visitaModal.ascensor[this.state.numeroAscensor].paradas}
        personas={this.state.visitaModal.ascensor[this.state.numeroAscensor].personas}
        puertasCabina={this.state.visitaModal.ascensor[this.state.numeroAscensor].puertasCabina}
        puertasPiso={this.state.visitaModal.ascensor[this.state.numeroAscensor].puertasPiso}
        rae={this.state.visitaModal.ascensor[this.state.numeroAscensor].rae}
        imagenesAscensor={this.state.visitaModal.ascensor[this.state.numeroAscensor].imagenesAscensor}

        />
        :
        this.state.historico ?
        <ModalHistoricoConversacion
        arrayConversacion={arrayConversacion}
        handleClickVolverModal={this.handleClickVolverModal}
        handleBorrarAccion={this.handleBorrarAccion}
          />
        :
        <ModalVisita
         administrador={this.state.visitaModal.nombreAdministrador}
         codigoPostal={this.state.visitaModal.postal}
         correElectronico={this.state.visitaModal.emailPresidente}
         cssEdicion={this.state.cssEdicion}
         direccion={this.state.visitaModal.calle}
         handleCerrarModal={this.handleCerrarModal}
         handleChange={this.handleChange}
         handleGuardarModificacion={this.handleGuardarModificacion}
         handleModificarVisita={this.handleModificarVisita}
         handleNuevaConversacion={this.handleNuevaConversacion}
         handleVerLosAscensores={this.handleVerLosAscensores}
         historicoConversacion={this.historicoConversacion}
         horaVisita={this.state.visitaModal.horaVisita}
         idVisitaPulsada={this.props.idVisitaPulsada}
         mantenedor={this.state.visitaModal.mantenedor}
         marcaAscensor={this.state.visitaModal.marca}
         nombrePresidente={this.state.visitaModal.nombrePresidente}
         numeroAscensores={this.state.visitaModal.numeroAscensores}
         numeroTotalAscensores={this.state.numeroTotalAscensores}
         poblacion={this.state.visitaModal.poblacion}
         telefonoPresidente={this.state.visitaModal.telefonoPresidente}
         tipoPresupuesto={this.state.visitaModal.tipoPresupuesto}
         vistitaPulsada={this.state.visitaModal}
        />
      }
      <div>
      <button type="button" onClick={this.handleVerLosAscensores} className="btn btn-info">Ver los Ascensores</button>
      <button type="button" onClick={this.handleModificarVisita} className="btn btn-info botonModificar">Modificar Visita</button>
      <button type="button" onClick={this.handleGuardarModificacion} className="btn btn-primary botonModificar">Guardar Modificacion</button>
      </div>
      </div>
    )
  }
}

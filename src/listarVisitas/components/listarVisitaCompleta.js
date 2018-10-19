import React, { Component } from 'react'
import Visita from './visitaList.js'
import ModalContainer from '../../widgets/container/modal-container.js'
import { ModalPrincipal } from '../../widgets/container/ModalPrincipal.js'
import { firebaseApp } from '../../index.js'
import './modal.css'

class ListarVisitaCompleta extends Component {
  state = {
    modalVisible: false,
    vistitaPulsada: 0,
    listaCompleta: [],
    idTodasVisitas:[],
  }

    handleVerModal = (event) => {
    const numeroVisitaPulsada = event.target.id
    this.setState({
      modalVisible:true,
      vistitaPulsada: numeroVisitaPulsada,
      })
    }

  handleCerrarModal = () =>{
    this.setState({
      modalVisible:false
    })
  }

  componentDidMount = () => {
    console.log('me he ejecutado');
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const listaBaseDatos = []
    const idVisitas = []
    ref.child(user.uid).child('visita').on('child_added', (sanpshot) =>{
    listaBaseDatos.push(sanpshot.val())
    })
    this.setState({
      listaCompleta:listaBaseDatos,
    })
    ref.child(user.uid).child('visita').on('child_added', (snapshot) => {
       idVisitas.push(snapshot.key)
         })
        this.setState({
        idTodasVisitas: idVisitas,
        modalVisible:false,
      })
  }
  render () {
    const listaCompleta =  this.state.listaCompleta
    if (this.state.modalVisible) {
      return (
        <ModalContainer>
            <div className="Modal">
            <div className="container">
             <h1 className="tituloPrincipal">Descripcion de la visita Realizada</h1>
             <ModalPrincipal
             visitaPulsada={this.state.listaCompleta[this.state.vistitaPulsada]}
             idVisitaPulsada={this.state.idTodasVisitas[this.state.vistitaPulsada]}
             numeroArrayPulsada={this.state.vistitaPulsada}
             />
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
          let contador  = i + 1
          const {
            nombreAdministrador,
            postal,
            calle,
            interes,
            mantenedor,
            poblacion,
            tipoPresupuesto,
            conversacion
          } = item
          const ultimaConversacion = conversacion[conversacion.length - 1].proxVisita
          return (
          <Visita
        administrador={nombreAdministrador}
        postal={postal}
        contador={contador}
        calle={calle}
        handleVerClick={this.handleVerModal}
        importancia={interes}
        key={i}
        mantenedor={mantenedor}
        numeroDeVisita={i}
        poblacion={poblacion}
        proxVisita={ultimaConversacion}
        tipoPresupuesto={tipoPresupuesto}
          />
        )
      })

        )
    }
  }


export default ListarVisitaCompleta

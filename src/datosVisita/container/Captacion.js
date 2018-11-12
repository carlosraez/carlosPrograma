import React, { Component } from 'react';
import { VisitaPuertaFria } from './VisitaPuertaFria.js'
import { PuertaFriaAdministradores } from './PuertaFriaAdministradores.js'
import { VisitaMantenimientoAdministradorLeed } from './VisitaMantenimientoAdministradorLeed.js'
import DashCaptacion from '../components/DashCaptacion.js'
import swal from 'sweetalert';
import { firebaseApp } from '../../index.js'


export class Captacion extends Component {
  state = {
    gestionLeed:false,
    usuarioPuertaFria: false,
    listaLeeds:[],
    usuarioPuertaFriaAdministradores:false,
    hacerVisitaMantenimiento:false,
    nombreAdministradormodi:'',
    tipoLeedModi:'',
    direccionModi:'',
    poblacionModi:'',
    fechaModi:'',
    nombrePresidenteModi:'',
    telefonoPresidenteModi:'',
    observacionesModi:'',
    mantenedor:'',
    nombreLeed:'',
    tipoLeedPulsado:'',
    cssEdicion:'inputOculto'

   }

  handleClickPuertaFria = () => {
    this.setState({
      usuarioPuertaFria:true
    })
  }

  handleClickRealizarVisita = () => {
    this.setState({
      hacerVisitaMantenimiento:true
    })
  }

  handleClickPuertaFriaAdministradores = () => {
    this.setState({
        usuarioPuertaFriaAdministradores:true
    })
  }

  handleChangeModi = (event) => {
    const  target = event.target
    const  value  = target.value
    const  id     = target.id
    this.setState({
      [id]:value
    })
  }

  handleClickModificar = () => {
    this.setState({
      cssEdicion:'verInput',
    })
  }

    handleClickGuardarModificacion = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const {
      nombreAdministradormodi,
      tipoLeedModi,
      direccionModi,
      poblacionModi,
      nombrePresidenteModi,
      telefonoPresidenteModi,
      observacionesModi,
      mantenedor,
      fechaModi,
      nombreLeed
    } = this.state
    const leedsModificados = [
        nombreAdministradormodi ,
        direccionModi,
        fechaModi,
        mantenedor,
        nombrePresidenteModi,
        observacionesModi,
        poblacionModi,
        telefonoPresidenteModi,
        tipoLeedModi,
         ]
    const clavesAModificar = [
    'administrador',
    'direccion',
    'fechaVisita',
    'mantenedor',
    'nombrePresidente',
     'observacionLeed',
     'poblacion',
    'telefonoPresidente',
    'tipo',
  ]
  for (let i = 0; i < leedsModificados.length; i ++) {
    if (leedsModificados[i] === '') { }
    else {
     const nuevaModificacion = {

         [clavesAModificar[i]]:leedsModificados[i]
     }

     ref.child(user.uid).child('visitas').child('captacionAdministrador').child('leeds').child(nombreLeed).update(nuevaModificacion)
    }

  }
    swal('El leed ha sido modificado')
    this.setState({
        cssEdicion:'inputOculto',
    })
    this.componentDidMount()
  }

  handleClickGestionarLeed = (event) => {
    const nombreLeed = event.target.id
    const listaLeeds = this.state.listaLeeds
    const tipo = listaLeeds[nombreLeed].tipo
      this.setState({
        gestionLeed:true,
        nombreLeed:nombreLeed,
        tipoLeedPulsado:tipo
      })
  }

   handleVerLeed = () => {
     this.setState({
       hacerVisitaMantenimiento:false
     })
   }

  componentDidMount = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const listaBaseDatosleeds = []
    ref.child(user.uid).child('visitas').child('captacionAdministrador').child('leeds').on('child_added', (snapshot) => {
        listaBaseDatosleeds.push(snapshot.val())
        this.setState({
          listaLeeds: listaBaseDatosleeds,
        })
    })

  }


   render() {
     return (
       <div>
      {
        this.state.hacerVisitaMantenimiento ?
        <VisitaMantenimientoAdministradorLeed
        handleVerLeed = {this.handleVerLeed}
        />
        :
        this.state.usuarioPuertaFria ?
        <VisitaPuertaFria />
        :
        this.state.usuarioPuertaFriaAdministradores ?
        <PuertaFriaAdministradores
        usuario = {this.props.usuario}
        />
        :
        <DashCaptacion
       cssEdicion={this.state.cssEdicion}
       handleClickGestionarLeed={this.handleClickGestionarLeed}
       gestionLeed={this.state.gestionLeed}
       nombreLeed={this.state.nombreLeed}
       listaLeeds={this.state.listaLeeds}
       handleClickModificar={this.handleClickModificar}
       handleChangeModi={this.handleChangeModi}
       handleClickRealizarVisita={this.handleClickRealizarVisita}
       handleClickPuertaFria={this.handleClickPuertaFria}
       handleClickGuardarModificacion={this.handleClickGuardarModificacion}
       handleClickPuertaFriaAdministradores={this.handleClickPuertaFriaAdministradores}
        />
      }
       </div>

     )
   }
}

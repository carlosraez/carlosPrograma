import React, { Component } from 'react'
import { firebaseApp } from '../../index.js'
import Administrador from '../Components/Administrador.js'
import swal from 'sweetalert';


export class ListaCompletaAdministradores extends Component {
  state = {
    modalVisible: false,
    vistitaPulsada: 0,
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



  handleBorrarVisita = () =>{
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    swal({
     title: "¿Estas seguro que quieres borrar el administrador?",
     text: "Si pulsas el administrador se eliminará para siempre",
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
     swal("El visita ha sido Borrada", {
       icon: "success",
     });
   } else {
      swal('¡¡Aun sigues teniendo el Administrador!!')
   }
     });
  }

  render () {
    const listaCompleta =  this.props.listaCompletaAdministrador
    return (
         listaCompleta.map((item, i) => {
          let contador  = i + 1
          const {
            despacho,
            postal,
            direccion,
            comercial,
            poblacion,
          } = item
          return (
          <Administrador
        postal={postal}
        despacho={despacho}
        contador={contador}
        direccion={direccion}
        handleVerClick={this.handleVerModal}
        key={i}
        numeroDeVisita={i}
        comercial={comercial}
        poblacion={poblacion}
          />
        )
      })

        )
    }
  }

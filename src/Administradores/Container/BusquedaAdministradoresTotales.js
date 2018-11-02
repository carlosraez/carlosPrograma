import React, { Component } from 'react'
import { firebaseApp } from '../../index.js'
import Administrador from '../Components/Administrador.js'
import swal from 'sweetalert';


export class BusquedaAdministradoresTotales extends Component {
  state = {
    listaCompletaCompletaAdministrador: []
  }

  componentDidMount = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    let listaNuevaAdministradores = []
    let idAdministrador = []
    ref.child('administradores').on('child_added', (sanpshot) => {
    listaNuevaAdministradores.push(sanpshot.val())
    this.setState({
      listaCompletaAdministrador:listaNuevaAdministradores
    })
    })
    ref.on('child_added', (snapshot) => {
       idAdministrador.push(snapshot.key)
       this.setState({
       idListaAdministradores: idAdministrador,
     })
    })
  }



  render () {
    const listaAdmistradoresTotal =  this.state.listaCompletaAdministrador
      return (
        <div>
        <p>Hola soy la lista</p>
        <ul>
        <li>Machancoses</li>
        <li>Machancoses</li>
        <li>Machancoses</li>
        </ul>
        </div>
      )

   }
  }

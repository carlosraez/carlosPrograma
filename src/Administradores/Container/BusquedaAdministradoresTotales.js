import React, { Component } from 'react'
import { firebaseApp } from '../../index.js'
import swal from 'sweetalert';
import BusquedaAdministradoresTotalesLayout from '../Components/BusquedaAdministradoresTotalesLayout.js'


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
        <BusquedaAdministradoresTotalesLayout
        handleClickAlta={this.props.handleClickAlta}
        >
        <p>Hola soy la lista</p>
        <ul>
        <li>Machancoses</li>
        <li>Machancoses</li>
        <li>Machancoses</li>
        </ul>
        </BusquedaAdministradoresTotalesLayout>
      )

   }
  }

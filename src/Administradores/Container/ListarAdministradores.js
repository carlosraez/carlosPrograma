import React, { Component } from 'react';
import { firebaseApp } from '../../index.js'
import ListaAdministradoresLayout from '../Components/ListaAdministradoresLayout.js'
import { ListaCompletaAdministradores } from './ListaCompletaAdministradores.js'



export class ListarAdministradores extends Component {
  state = {
    listaCompletaAdministrador:[],
    idListaAdministradores:[],
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
    console.log('--soy el render de listarAdministradores');
    const { listaCompletaAdministrador } = this.state
    return (
      <div>
      <ListaAdministradoresLayout
        handleChange={this.handleChange}
      >
      <ListaCompletaAdministradores
        listaCompletaAdministrador={listaCompletaAdministrador}
      />
      </ListaAdministradoresLayout>
      </div>
    )
  }
 }

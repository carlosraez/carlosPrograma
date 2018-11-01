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
    const listaBaseDatosAdministrador = []
    const idAdministrador = []
    ref.child('administradores').on('child_added', (sanpshot) =>{
    listaBaseDatosAdministrador.push(sanpshot.val())
    })
    this.setState({
      listaCompletaAdministrador:listaBaseDatosAdministrador,
    })
    ref.on('child_added', (snapshot) => {
       idAdministrador.push(snapshot.key)
         })
        this.setState({
        idListaAdministradores: idAdministrador,
        modalVisible:false,
      })
  }

  render () {
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

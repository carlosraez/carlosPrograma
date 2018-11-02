import React, { Component } from 'react'
import { firebaseApp } from '../../index.js'
import swal from 'sweetalert';
import BusquedaAdministradoresTotalesLayout from '../Components/BusquedaAdministradoresTotalesLayout.js'


export class BusquedaAdministradoresTotales extends Component {
  state = {
    listaCompletaCompletaAdministrador: [],
    buscarAdministrador:''
  }


    handleChange = (e) => {
      const target = e.target
      const value = target.value
      const id = target.id
      this.setState({
       [id] : value
      })

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
    console.log(this.state.buscarAdministrador);
      return (
        <BusquedaAdministradoresTotalesLayout
        handleClickAlta={this.props.handleClickAlta}
        >
        <div className="form-group">
            <label>Buscar Administrador</label>
            <input type="text" id="buscarAdministrador" onChange={this.handleChange}  placeholder="Introduce el nombre de un despacho" className="form-control" / >
        </div>
        </BusquedaAdministradoresTotalesLayout>
      )

   }
  }

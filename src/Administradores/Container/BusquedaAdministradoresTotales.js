import React, { Component } from 'react'
import { firebaseApp } from '../../index.js'
import BusquedaAdministradoresTotalesLayout from '../Components/BusquedaAdministradoresTotalesLayout.js'


export class BusquedaAdministradoresTotales extends Component {
  state = {
    buscarAdministrador:'',
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
    ref.child('administradores').once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var childKey = childSnapshot.key;
          var childData = childSnapshot.val();
          console.log(childKey, childData);
     });
    })
  }


  render () {
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

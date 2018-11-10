import React, { Component } from 'react';
import LeedAGestionar from '../components/LeedAGestionar.js'
import { GestionLeed } from './GestionLeed.js'
import { firebaseApp } from '../../index.js'


export class TablaLeeds extends Component {
state = {
  listaLeeds:[],
  gestionLeed : false
}

HandleClickGestionarLeed = () => {
    this.setState({
      gestionLeed:true
    })
}

HandleVolverALista = () => {
  this.setState({
    gestionLeed:false
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
     const listaLeeds = this.state.listaLeeds
     if (this.state.gestionLeed) {
       return (
         <GestionLeed
         observacionleed={'dedede'}
         direccion={'Av Francia 1'}
         poblacion={'Valencia'}
         administrador={'Consulting Machancoses'}
         tipoLeed={'Obra Nueva'}
         HandleVolverALista={this.HandleVolverALista}
         />
       )
     }
  else {
    return (
     <table className="table">
 <thead>
   <tr>
     <th scope="col">Nº</th>
     <th scope="col">Fecha del Leed</th>
     <th scope="col">Direccion</th>
     <th scope="col">Poblacion</th>
     <th scope="col">Tipo</th>
     <th scope="col">Administrador</th>
     <th scope="col">Gestiona</th>
   </tr>
 </thead>
 <tbody>
 {
     listaLeeds.map((leed,i) => {
       return (
           <LeedAGestionar
           key={i}
           contador={i}
           fechaLeed={'22/12/2018'}
           direccion={leed.direccion}
           poblacion={leed.poblacion}
           tipoLeed={leed.tipo}
           administrador={leed.administrador}
           HandleClickGestionarLeed={this.HandleClickGestionarLeed}
           />
       )
     })
 }
 </tbody>
</table>
    )
      }
   }
}

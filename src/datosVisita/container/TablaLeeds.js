import React, { Component } from 'react';
import LeedAGestionar from '../components/LeedAGestionar.js'
import GestionLeedComponents from '../components/GestionLeedComponents'
import GestionLeedLayout from '../components/GestionLeedLayout'
import { firebaseApp } from '../../index.js'
import swal from 'sweetalert';



export class TablaLeeds extends Component {
state = {
  listaLeeds:[],
  gestionLeed : false,
  cssEdicion:'inputOculto',
  nombreAdministradormodi:'',
  tipoLeedModi:'',
  direccionModi:'',
  poblacionModi:'',
  fechaModi:'',
  nombrePresidenteModi:'',
  telefonoPresidenteModi:'',
  observacionesModi:'',
  mantenedor:'',
  nombreLeed:''
}

handleChangeModi = (event) => {
  const  target = event.target
  const  value  = target.value
  const  id     = target.id
  this.setState({
    [id]:value
  })
}

HandleClickGestionarLeed = (event) => {
  const nombreLeed = event.target.id
    this.setState({
      gestionLeed:true,
      nombreLeed:nombreLeed
    })
}

HandleVolverALista = () => {
  this.setState({
    gestionLeed:false
  })
}

HandleClickModificar = () => {
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
  'fechaModi',
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
     const { nombreLeed, listaLeeds } = this.state
     const leedActual = listaLeeds[nombreLeed] || []
      if (this.state.gestionLeed) {
       return (
         <GestionLeedLayout>
             <GestionLeedComponents
             handleClickRealizarVisita={this.props.handleClickRealizarVisita}
             handleChangeModi={this.handleChangeModi}
             cssEdicionModificar={this.state.cssEdicion}
             handleClickGuardarModificacion={this.handleClickGuardarModificacion}
             fechaLeed={leedActual.fechaVisita}
             nombrePresidente={leedActual.nombrePresidente}
             telefonoPresidente={leedActual.telefonoPresidente}
             mantenedor={leedActual.mantenedor}
             observacionleed={leedActual.observacionLeed}
             direccion={leedActual.direccion}
             poblacion={leedActual.poblacion}
             administrador={leedActual.administrador}
             tipoLeed={leedActual.tipo}
             HandleClickModificar={this.HandleClickModificar}
             HandleVolverALista={this.HandleVolverALista}
             />
         </GestionLeedLayout>
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
           id={i}
           fechaLeed={leed.fechaVisita}
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

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
  LeedAGestionar:{},
  cssEdicion:'inputOculto',
  nombreAdministradormodi:'',
  tipoLeedModi:'',
  direccionModi:'',
  poblacionModi:'',
  nombrePresidenteModi:'',
  telefonoPresidenteModi:null,
  observacionesModi:'',
  mantenedor:''
}

handleChangeModi = (event) => {
  const  target = event.target
  const  value  = target.value
  const  id     = target.id
  console.log(id,value);
}

HandleClickGestionarLeed = (event) => {
  console.log(event.target.id);
  const leedAGestionarPulsado = this.state.listaLeeds[event.target.id]
    this.setState({
      gestionLeed:true,
      leedAGestionarPulsado:leedAGestionarPulsado
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
  } = this.state
  const leedsModificados = [
    nombreAdministradormodi ,
     tipoLeedModi,
     direccionModi,
     poblacionModi,
    telefonoPresidenteModi,
    nombrePresidenteModi,
    telefonoPresidenteModi,
    observacionesModi,
    mantenedor
  ]
  const clavesAModificar = [
  'nombreAdministrador',
  'tipoLeed',
  'direccion',
  'poblacion',
  'nombrePresidente',
  'telefonoPresidente',
  'observacionesModi',
  'mantenedor',
]
  
  swal('El leed ha sido modificado')

  this.setState({
      cssEdicion:'inputOculto',
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
     const { leedAGestionarPulsado, listaLeeds } = this.state
     if (this.state.gestionLeed) {
       return (
         <GestionLeedLayout>
             <GestionLeedComponents
             handleChangeModi={this.handleChangeModi}
             cssEdicionModificar={this.state.cssEdicion}
             handleClickGuardarModificacion={this.handleClickGuardarModificacion}
             fechaLeed={'22/12/2018'}
             mantenedor={leedAGestionarPulsado.mantenedor}
             observacionleed={leedAGestionarPulsado.observacionLeedObraNueva || leedAGestionarPulsado.observacionLeedManimiento}
             direccion={leedAGestionarPulsado.direccion}
             poblacion={leedAGestionarPulsado.poblacion}
             administrador={leedAGestionarPulsado.administrador}
             tipoLeed={leedAGestionarPulsado.tipo}
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

import React, { Component } from 'react'
import { firebaseApp } from '../../index.js'
import swal from 'sweetalert';

export class Conversacion extends Component {
  state = {
    textoNuevaVisita:'',
    proxNuevaVisita:'',
    proxVisita:'',
    textoInfoVisita:'',
    nuevaPosicionConversacion: 0
  }

  handleChange = (event) => {
    const target = event.target
     const value = target.value
     const id = target.id
     this.setState({
       [id]: value
     })
  }

  handleNuevaConversacion = () => {
  const ref  = firebaseApp.database().ref('usuarios')
  const user = firebaseApp.auth().currentUser;
  const visitaAModificar = this.props.idVisitaPulsada
  const longitudConversacion  = this.state.nuevaPosicionConversacion
  if (longitudConversacion === 1) {
    let subirConversacion = 1
      const nuevaConversacion = {
            [subirConversacion] : {
            textoInfoVista:this.state.textoNuevaVisita,
            proxVisita:this.state.proxNuevaVisita,
          }
      }
   ref.child(user.uid).child('visita').child(visitaAModificar).child('conversacion').update(nuevaConversacion)
  }
 else {
   let subirConversacion = this.state.nuevaPosicionConversacion
   console.log(subirConversacion)
   const nuevaConversacion = {
           [subirConversacion] : {
           textoInfoVista:this.state.textoNuevaVisita,
           proxVisita:this.state.proxNuevaVisita,
         }
     }
     ref.child(user.uid).child('visita').child(visitaAModificar).child('conversacion').update(nuevaConversacion)
  }

   swal('Se ha añadido nueva Accion')
   this.componentDidMount()
 }

 componentDidMount = () => {
   const ref  = firebaseApp.database().ref('usuarios')
   const user = firebaseApp.auth().currentUser;
    const visitaAModificar = this.props.idVisitaPulsada
    const ListaConversacion = []
    ref.child(user.uid).child('visita').child(visitaAModificar).child('conversacion').on('child_added', (sanpshot) =>{
    ListaConversacion.push(sanpshot.val())
    })
    this.setState({
      nuevaPosicionConversacion: ListaConversacion.length
    })
 }



  render() {
    console.log(`soy la nueva nuevaPosicionConversacion ${this.state.nuevaPosicionConversacion}`);
     return(
      <ul className="list-group">
      <li className="conversacion list-group-item">{this.props.fechaConversacion}: {this.props.conversacion}</li>
      <label>Fecha de La Proxima Accion</label>
      <input type="date" id="proxNuevaVisita" onChange={this.handleChange}  className="form-control" />
      <textarea className="form-control" onChange={this.handleChange} id="textoNuevaVisita" rows="3"></textarea>
      <button type="button" onClick={this.handleNuevaConversacion} className="btn btn-info sm">Subir Conversacion</button>
       </ul>
     )
  }
}

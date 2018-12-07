import React, { Component } from 'react';
import { Rnd }  from 'react-rnd'
import './InputReserva.css'
import { firebaseApp } from '../../index.js'
import moment from 'moment'


export class Inputhoras extends Component {
   state = {
       height:parseInt(this.props.minutosTotales,10) * 3.3,
       fechaFinalReunion:this.props.fechaFinalReunion,
       tituloReservaBaseDatos: this.props.tituloReservaBaseDatos, 
       direccionReservaBaseDatos: this.props.direccionReservaBaseDatos  
   }

   tiempoFinal = () => {
    const { fechaFinalReunion ,height } = this.state 
    const tiempoInicio = parseInt(this.props.minutosTotales,10)  
    const minutosNuevos = height / 3.3
    const tiempoDeAumento = (Math.trunc(tiempoInicio - minutosNuevos) * -1)
    const horaFinal = moment(fechaFinalReunion, 'h:mm').add(tiempoDeAumento, 'minutes').format('h:mm')
    return horaFinal
    
   }

   modificarTituloReserva = () => {
    const titulo = prompt('Escribe tu nuevo titulo')
    const tituloActual = this.props.tituloReservaBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const tituloModificado = {
        tituloReserva: titulo
    }
   
   ref.child(user.uid).child('reuniones').child(tituloActual).update(tituloModificado)
   this.setState({
       tituloReservaBaseDatos:titulo
   })
        
   }
   modificarDireccion = () => {
    const direccion = prompt('Escribe tu nuevo Dirección')
    const tituloActual = this.props.tituloReservaBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const direccionModificada = {
        direccion: direccion
    }
   ref.child(user.uid).child('reuniones').child(tituloActual).update(direccionModificada)
   this.setState({
       direccionReservaBaseDatos:direccion
   })
   }

   handleClickBorrarReserva = () => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser
    ref.child(user.uid).child('reuniones').child(1).remove()
   }
   
   render() {
    const { tituloReservaBaseDatos , direccionReservaBaseDatos } = this.state
    const { fechaInicioReunion  } = this.props

     return (
    <Rnd
    enableResizing={{bottom:true}}
    disableDragging={true}
    size={{ height: this.state.height, width:170 }}
    minHeight={66}
    className='reservaBorder' 
    onResize={(e, direction, ref, delta, position) => {
        this.setState({
            height: parseInt(ref.style.height,10),
        });
      }}
    >
    <h5 className="tituloReserva"><span><button type="button" onClick={this.handleClickBorrarReserva}  className="btn btn-danger btn-sm">Borrar</button></span>{`${fechaInicioReunion} - ${this.tiempoFinal()}`}</h5>
    <p onDoubleClick={this.modificarTituloReserva}>{tituloReservaBaseDatos}</p>  
    <p onDoubleClick={this.modificarDireccion}>{direccionReservaBaseDatos}</p> 
    
    </Rnd>
     )
   }
}
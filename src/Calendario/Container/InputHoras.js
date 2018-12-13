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
    const {  minutosTotales } = this.props
    const nombreReserva = this.props.nombreReservasBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const tiempoInicio = parseInt(minutosTotales,10)  
    const minutosNuevos = height / 3.3
    const tiempoDeAumento = (Math.trunc(tiempoInicio - minutosNuevos) * -1)
    const horaFinal = moment(fechaFinalReunion, 'h:mm').add(tiempoDeAumento, 'minutes').format('HH:mm')
    const reservaHoraFin = {
        horaFin: horaFinal
    }
   
    ref.child(user.uid).child('reuniones').child(nombreReserva).update(reservaHoraFin)
    return horaFinal 
   }

   

   modificarTituloReserva = () => {
    const titulo = prompt('Escribe tu nuevo titulo')
    const nombreReserva = this.props.nombreReservasBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const tituloModificado = {
        tituloReserva: titulo
    }
   
   ref.child(user.uid).child('reuniones').child(nombreReserva).update(tituloModificado)
   this.props.recargarComponenteCalendario()     
   }
   modificarDireccion = () => {
    const direccion = prompt('Escribe tu nuevo Dirección')
    const nombreReserva = this.props.nombreReservasBaseDatos
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const direccionModificada = {
        direccion: direccion
    }
   ref.child(user.uid).child('reuniones').child(nombreReserva).update(direccionModificada)
   this.props.recargarComponenteCalendario()
   }

   static getDerivedStateFromProps = (props, state) => {         
    return props
  }
   
   render() {
    const { tituloReservaBaseDatos , direccionReservaBaseDatos } = this.state
    const { fechaInicioReunion , handleClickBorrarReserva   } = this.props
    
    
     
     return (
    <Rnd
    enableResizing={{bottom:true,top:true}}
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
    <h5 className="tituloReserva"><span><button type="button" onClick={handleClickBorrarReserva}  className="btn btn-danger btn-sm">Borrar</button></span>{`${fechaInicioReunion} - ${this.tiempoFinal()}`}</h5>
    <p onDoubleClick={this.modificarTituloReserva}>{tituloReservaBaseDatos}</p>  
    <p onDoubleClick={this.modificarDireccion}>{direccionReservaBaseDatos}</p> 
    
    </Rnd>
     )
   }
}
import React, { Component } from 'react';
import { Rnd }  from 'react-rnd'
import './InputReserva.css'
import { firebaseApp } from '../../index.js'
import moment from 'moment'


export class Inputhoras extends Component {
   state = {
       height:parseInt(this.props.minutosTotales,10) * 1.1,
       horaFinalReunion:this.props.horaFinalReunion,
       tituloReservaBaseDatos: this.props.tituloReservaBaseDatos, 
       direccionReservaBaseDatos: this.props.direccionReservaBaseDatos,
       movimientoArriba:0,
       movimientoAbajo:0,
   }
   
  tiempoInicialCalculo = () => {
     const { movimientoArriba } = this.state
     const { horaInicioReunion } = this.props
     const tiempoDeAumento = Math.trunc(movimientoArriba / 1.1) 
     const horaFinal = moment(horaInicioReunion, 'h:mm').subtract(tiempoDeAumento, 'minutes').format('HH:mm')
     
    return horaFinal

  }

  modificacionDia  =  (x) => {      
      const { fecha } =  this.state
      const diasMovidos = Math.round(x / 213)
      const fechaFinal =  moment(fecha, 'DD/MM/YYYY h:mm').add(diasMovidos, 'days').format('DD/MM/YYYY')
      
      this.guardarFechasFirebase(fechaFinal)       
          
  }
   
  guardarFechasFirebase = (fechaFinal) => {
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const fechaModificada = fechaFinal 
    const nombreReserva = this.props.nombreReservasBaseDatos
    const reservaNuevaFecha = {
        fechaReserva:fechaModificada
    }
    ref.child(user.uid).child('reuniones').child(nombreReserva).update(reservaNuevaFecha) 
  }

   guardarFirebase = () => {
    const horaFinal = this.tiempoFinalCalculo()
    const horaInicial = this.tiempoInicialCalculo()
    const ref  = firebaseApp.database().ref('usuarios')
    const user = firebaseApp.auth().currentUser;
    const nombreReserva = this.props.nombreReservasBaseDatos
    const reservaHoraInicio = {
        horaInicio: horaInicial,
        horaFin: horaFinal,
   
    }

    ref.child(user.uid).child('reuniones').child(nombreReserva).update(reservaHoraInicio) 
    
   }
  
   tiempoFinalCalculo = () => {
    const { horaFinalReunion ,movimientoAbajo } = this.state 
    const tiempoDeAumento = Math.trunc(movimientoAbajo / 1.1)
    const horaFinal = moment(horaFinalReunion, 'h:mm').add(tiempoDeAumento, 'minutes').format('HH:mm')
    
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
    const { tituloReservaBaseDatos , direccionReservaBaseDatos  } = this.state
    const {  handleClickBorrarReserva   } = this.props
    
     return (
    <Rnd
    enableResizing={{bottom:true,top:true}}
    disableDragging={false}
    size={{ height: this.state.height, width:213 }}
    minHeight={66}
    dragGrid={[1, 7]}
    onDragStop={ (event,{x,y}) => { this.modificacionDia(x) }}
    className='reservaBorder' 
    onResize={(e, direction, ref, delta, position) => {     
    const alturaActualModificada = this.state.height  - parseInt(ref.style.height,10)
    const { movimientoArriba , movimientoAbajo } = this.state    
        if (direction === 'top') {
            const movimientoNuevo =  (movimientoArriba - alturaActualModificada) 
            this.setState({
                movimientoArriba: movimientoNuevo ,
                height: parseInt(ref.style.height,10),
                x:position.x,
                y:position.y
            }); 
            
        }

        else {
        const movimientoNuevo = (movimientoAbajo - alturaActualModificada) 
        this.setState({
            height: parseInt(ref.style.height,10),
            movimientoAbajo: movimientoNuevo
        });
        } 
      }}
    onResizeStop={this.guardarFirebase}
    >
    <h5 className="tituloReserva">{/*<span><button type="button" onClick={handleClickBorrarReserva}  className="btn btn-danger btn-sm">Borrar</button></span>*/}{`${this.tiempoInicialCalculo()} - ${this.tiempoFinalCalculo()}`}</h5>
    <p onDoubleClick={this.modificarTituloReserva}>{tituloReservaBaseDatos}</p>  
    <p onDoubleClick={this.modificarDireccion}>{direccionReservaBaseDatos}</p> 
    </Rnd>
     )
   }
}


